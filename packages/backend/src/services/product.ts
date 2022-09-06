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
import type { Product } from '@prisma/client';
import type { Bid } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import type { VerifyService } from '@services';
import type { BidRepository } from '@repositories';
import { productMapper } from '@mappers';
import { FieldError } from 'error/product/field-error';
import { createPostSchema, updatePostSchema } from 'validation/product/schemas';
import { auctionPermissionsMapper } from '@mappers';
import { lang } from '../lang';
import type { S3StorageService } from './s3-storage';

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

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public async getById(productId: string) {
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

    await this._bidRepository.deleteAllByProductAndUser(userId, productId);

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
      return undefined;
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
    );
  }

  public async getMostPopularLots(limit: string) {
    return this._productRepository.getMostPopularLots(+limit);
  }

  public async getMostPopularProducts(limit: string) {
    return this._productRepository.getMostPopularProducts(+limit);
  }
}
