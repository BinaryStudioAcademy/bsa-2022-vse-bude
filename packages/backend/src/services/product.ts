import type { ProductRepository } from '@repositories';
import {
  ProductNotFoundError,
  UnauthorizedError,
  AuctionEndedError,
} from '@errors';
import type { Request } from 'express';
import {
  getFilenameFromUrl,
  getUserIdFromRequest,
  toUtc,
  translateCondition,
} from '@helpers';
import type {
  AddProductToFavorites,
  AuctionPermissionsResponse,
  BuyProduct,
  DeleteProductFromFavorites,
  CreateProduct,
  UpdateProduct,
  ProductQuery,
} from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { ProductStatus } from '@prisma/client';
import type { Product, Bid } from '@prisma/client';
import type { VerifyService, S3StorageService } from '@services';
import type { BidRepository } from '@repositories';
import { productMapper, auctionPermissionsMapper } from '@mappers';
import { FieldError } from 'error/product/field-error';
import { createPostSchema, updatePostSchema } from 'validation/product/schemas';
import { NotVerifiedError } from 'error/user/not-verified';
import { lang } from '@lang';
import type { AllProductsResponse } from '@types';

export class ProductService {
  private _productRepository: ProductRepository;

  private _bidRepository: BidRepository;

  private _verifyService: VerifyService;

  private _s3StorageService: S3StorageService;

  constructor(
    productRepository: ProductRepository,
    verifyService: VerifyService,
    s3StorageService: S3StorageService,
    bidRepository: BidRepository,
  ) {
    this._productRepository = productRepository;
    this._verifyService = verifyService;
    this._s3StorageService = s3StorageService;
    this._bidRepository = bidRepository;
  }

  public async getAll(query: ProductQuery): Promise<AllProductsResponse> {
    const { categoryId, type, priceGt, priceLt } = query;
    const items = await this._productRepository.getAll(query);
    const totalCount = await this._productRepository.getAllItemsLength({
      categoryId,
      type,
      priceGt,
      priceLt,
    });

    return { items, count: totalCount };
  }

  public async getById(productId: string) {
    const product = await this._productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (product.category) {
      product.category.title = lang(`categories:${product.category.title}`);
    }

    if (product.condition) {
      product.condition = translateCondition(product.condition);
    }

    const currentPrice = await this._productRepository.getCurrentPrice(
      product.id,
    );

    return productMapper(product, +currentPrice);
  }

  public async incrementViews(id: string, req: Request) {
    const userId = getUserIdFromRequest(req);

    if (userId) {
      const product = await this._productRepository.getById(id);

      if (product.author.id === userId) {
        return product;
      }
    }

    return this._productRepository.incrementViews(id);
  }

  public async getFavoriteIds(userId: string) {
    const favProducts = await this._productRepository.favoriteIds(userId);

    return favProducts.map((favProd) => favProd.productId);
  }

  public async getFavoriteProducts(userId: string) {
    return this._productRepository.getFavorite(userId);
  }

  public async getAuctionPermissions(
    userId: string,
    productId: string,
  ): Promise<AuctionPermissionsResponse> {
    const product = await this._productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (toUtc(product.endDate) < toUtc()) {
      throw new AuctionEndedError();
    }

    const bids: Bid[] = await this._bidRepository.getByUserAndProduct(
      userId,
      productId,
    );

    return auctionPermissionsMapper(!!bids.length);
  }

  public async leaveAuction(userId: string, productId: string) {
    const product = await this._productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (toUtc(product.endDate) < toUtc()) {
      throw new AuctionEndedError();
    }

    await this._bidRepository.retrieve(
      userId,
      productId,
      new Date(Date.now()).toISOString(),
    );

    return this.getById(productId);
  }

  public async addToFavorites({ userId, productId }: AddProductToFavorites) {
    const isInFavorite = await this._productRepository.isInFavorite(
      userId,
      productId,
    );
    if (isInFavorite) {
      return undefined;
    }
    await this._productRepository.addToFavorites(userId, productId);

    return productId;
  }

  public async deleteFromFavorites({
    userId,
    productId,
  }: DeleteProductFromFavorites) {
    const isInFavorite = await this._productRepository.isInFavorite(
      userId,
      productId,
    );
    if (!isInFavorite) {
      return undefined;
    }
    await this._productRepository.deleteFromFavorites(userId, productId);

    return productId;
  }

  public async createProduct({ req, userId, fieldsData }: CreateProduct) {
    const { error } = createPostSchema.validate(req.body);
    if (error) {
      throw new FieldError(error.message);
    }
    const isUserVerified = await this._verifyService.isUserVerified(userId);

    if (!isUserVerified) {
      throw new NotVerifiedError();
    }
    const imageLinks = await this._s3StorageService.uploadProductImages(req);
    if (fieldsData.type === ProductType.AUCTION) {
      fieldsData.price = fieldsData.recommendedPrice;
    }
    if (fieldsData.status !== ProductStatus.DRAFT) {
      fieldsData.postDate = new Date();
    }
    const data = {
      imageLinks,
      authorId: userId,
      ...fieldsData,
    };
    const product = await this._productRepository.create(data);

    return product;
  }

  public async updateProduct({
    req,
    productId,
    userId,
    fieldsData,
  }: UpdateProduct) {
    const { error } = updatePostSchema.validate(req.body);
    if (error) {
      throw new FieldError(error.message);
    }

    const product = (await this._productRepository.getById(
      productId,
    )) as Product;
    if (product.authorId !== userId) throw new UnauthorizedError();
    const newImageLinks = await this._s3StorageService.uploadProductImages(req);
    const oldImages = fieldsData?.images ? [...fieldsData.images] : [];
    const deletedImages = product.imageLinks.reduce(
      (acc, item) => (oldImages.includes(item) ? acc : [item, ...acc]),
      [],
    );

    for await (const image of deletedImages) {
      await this._s3StorageService.deleteImage(getFilenameFromUrl(image));
    }

    const imageLinks = oldImages
      ? [...oldImages, ...newImageLinks]
      : newImageLinks;
    if (
      product.status === ProductStatus.DRAFT &&
      fieldsData.status !== ProductStatus.DRAFT
    ) {
      fieldsData.postDate = new Date();
    }
    const data = {
      imageLinks,
      authorId: userId,
      ...fieldsData,
    };
    const updatedProduct = await this._productRepository.update(
      productId,
      data,
    );

    return updatedProduct;
  }

  public async buy({ userId, productId }: BuyProduct) {
    const isActive = await this._productRepository.checkStatus(
      productId,
      ProductStatus.ACTIVE,
    );
    if (!isActive) {
      return undefined;
    }
    const isUserVerified = await this._verifyService.isUserVerified(userId);
    if (!isUserVerified) {
      throw new NotVerifiedError();
    }
    await this._productRepository.buy(
      productId,
      userId,
      ProductStatus.FINISHED,
    );

    return productId;
  }

  public async getSimilar(productId: string) {
    const product = await this._productRepository.getById(productId);

    return this._productRepository.findSimilar(
      product.city,
      product.categoryId,
      product.type,
      product.id,
    );
  }

  public async getMostPopularLots(limit: string) {
    return this._productRepository.getMostPopularLots(+limit);
  }

  public async getMostPopularProducts(limit: string) {
    return this._productRepository.getMostPopularProducts(+limit);
  }

  public async getEditProductById({ userId, productId }) {
    const product = await this.getById(productId);

    if (!product) {
      throw new ProductNotFoundError();
    }
    if (product.authorId !== userId) {
      throw new UnauthorizedError();
    }

    return product;
  }
}
