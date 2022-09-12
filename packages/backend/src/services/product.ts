import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import {
  ProductNotFoundError,
  UnauthorizedError,
  AuctionEndedError,
} from '@errors';
import type { Request } from 'express';
import { getFilenameFromUrl, getUserIdFromRequest, toUtc } from '@helpers';
import type {
  AddProductToFavorites,
  AuctionPermissionsResponse,
  BuyProduct,
  DeleteProductFromFavorites,
  CreateProduct,
  UpdateProduct,
} from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { ProductStatus } from '@prisma/client';
import type { Product, Bid } from '@prisma/client';
import type { VerifyService, S3StorageService } from '@services';
import type { BidRepository } from '@repositories';
import { productMapper, auctionPermissionsMapper } from '@mappers';
import { FieldError } from 'error/product/field-error';
import { createPostSchema, updatePostSchema } from 'validation/product/schemas';
import type { ProductDto } from '@vse-bude/shared';
import { NotVerifiedError } from 'error/user/not-verified';
import { lang } from '@lang';
import type { AuctionScheduler } from '@services';

export class ProductService {
  private _productRepository: ProductRepository;

  private _bidRepository: BidRepository;

  private _verifyService: VerifyService;

  private _s3StorageService: S3StorageService;

  private _auctionScheduler: AuctionScheduler;

  constructor(
    productRepository: ProductRepository,
    verifyService: VerifyService,
    s3StorageService: S3StorageService,
    bidRepository: BidRepository,
    auctionScheduler: AuctionScheduler,
  ) {
    this._productRepository = productRepository;
    this._verifyService = verifyService;
    this._s3StorageService = s3StorageService;
    this._bidRepository = bidRepository;
    this._auctionScheduler = auctionScheduler;
  }

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public async getById(productId: string): Promise<ProductDto> {
    const product = await this._productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (product.category) {
      product.category.title = lang(`categories:${product.category.title}`);
    }

    const currentPrice = await this._productRepository.getCurrentPrice(
      product.id,
    );

    return productMapper(product, currentPrice);
  }

  public async incrementViews(id: string, req: Request) {
    const userId = getUserIdFromRequest(req);

    if (userId) {
      const product = await this._productRepository.getById(id);

      if (product.author.id === userId) {
        return product;
      }
    }

    return productMapper(await this._productRepository.incrementViews(id));
  }

  public async getFavoriteIds(userId: string) {
    const favProducts = await this._productRepository.favoriteIds(userId);

    return favProducts.map((favProd) => favProd.productId);
  }

  public async getFavoriteProducts(userId: string) {
    const favProducts = await this._productRepository.getFavorite(userId);

    return favProducts.map((product) => productMapper(product));
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
      fieldsData.postDate = new Date().toISOString();
    }
    const data = {
      imageLinks,
      authorId: userId,
      ...fieldsData,
    };
    const product = await this._productRepository.create(data);

    if (this.isAuctionProduct(product.type)) {
      this._auctionScheduler.createAuctionJob(product);
    }

    return productMapper(product);
  }

  private isAuctionProduct(type: string) {
    return type === ProductType.AUCTION;
  }

  public async updateProduct({
    req,
    productId,
    userId,
    fieldsData,
  }: UpdateProduct) {
    fieldsData.images = fieldsData.images
      ? [].concat(fieldsData.images)
      : undefined;

    const { error } = updatePostSchema.validate(fieldsData);
    if (error) {
      throw new FieldError(error.message);
    }

    const product = (await this._productRepository.getById(
      productId,
    )) as Product;
    if (product.authorId !== userId) throw new UnauthorizedError();
    const newImageLinks = await this._s3StorageService.uploadProductImages(req);

    const oldImages = fieldsData?.images || [];

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
      fieldsData.postDate = new Date().toISOString();
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

    if (this.isAuctionProduct(updatedProduct.type)) {
      this._auctionScheduler.updateAuctionJob(updatedProduct);
    }

    return productMapper(updatedProduct);
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
    const similarProducts = await this._productRepository.findSimilar(
      product.city,
      product.categoryId,
      product.type,
      product.id,
    );

    return similarProducts.map((product) => productMapper(product));
  }

  public async getMostPopularLots(limit: string) {
    const mostPopular = await this._productRepository.getMostPopularLots(
      +limit,
    );

    return mostPopular.map((product) => productMapper(product));
  }

  public async getMostPopularProducts(limit: string) {
    const mostPopular = await this._productRepository.getMostPopularProducts(
      +limit,
    );

    return mostPopular.map((product) => productMapper(product));
  }

  public async getEditProductById({ userId, productId }) {
    const product = await this.getById(productId);

    if (!product) {
      throw new ProductNotFoundError();
    }
    if (product.author.id !== userId) {
      throw new UnauthorizedError();
    }

    return product;
  }
}
