import type { ProductRepository, BidRepository } from '@repositories';
import {
  ProductNotFoundError,
  UnauthorizedError,
  AuctionEndedError,
  FieldError,
  NotVerifiedError,
  AlreadyLeftAuctionError,
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
  ProductQuery,
  ProductSearchResponse,
  ProductSearchQuery,
} from '@vse-bude/shared';
import { ProductType, NotificationType } from '@vse-bude/shared';
import { ProductStatus } from '@prisma/client';
import type { Product, Bid } from '@prisma/client';
import type {
  AuctionScheduler,
  VerifyService,
  S3StorageService,
  NotificationService,
} from '@services';
import { productMapper, auctionPermissionsMapper } from '@mappers';
import { createPostSchema, updatePostSchema } from 'validation/product/schemas';
import { lang } from '@lang';
import type { AllProductsResponse, ProductById } from '@types';

export class ProductService {
  private _productRepository: ProductRepository;

  private _bidRepository: BidRepository;

  private _verifyService: VerifyService;

  private _s3StorageService: S3StorageService;

  private _auctionScheduler: AuctionScheduler;

  private _notificationService: NotificationService;

  constructor(
    productRepository: ProductRepository,
    verifyService: VerifyService,
    s3StorageService: S3StorageService,
    bidRepository: BidRepository,
    auctionScheduler: AuctionScheduler,
    notificationService: NotificationService,
  ) {
    this._productRepository = productRepository;
    this._verifyService = verifyService;
    this._s3StorageService = s3StorageService;
    this._bidRepository = bidRepository;
    this._auctionScheduler = auctionScheduler;
    this._notificationService = notificationService;
  }

  public async getAll(query: ProductQuery): Promise<AllProductsResponse> {
    const [items, count] = await this._productRepository.getAll(query);

    return { items, count };
  }

  public search(query: ProductSearchQuery): Promise<ProductSearchResponse[]> {
    return this._productRepository.search(query);
  }

  public async getById(productId: string): Promise<Product> {
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

  public async incrementViews(id: string, req: Request): Promise<Product> {
    const userId = getUserIdFromRequest(req);

    if (userId) {
      const product = await this._productRepository.getById(id);

      if (product.author.id === userId) {
        return product;
      }
    }

    return productMapper(await this._productRepository.incrementViews(id));
  }

  public async getFavoriteIds(userId: string): Promise<string[]> {
    const favProducts = await this._productRepository.favoriteIds(userId);

    return favProducts.map((favProd) => favProd.productId);
  }

  public async getFavoriteProducts(userId: string): Promise<ProductById[]> {
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

  public async leaveAuction(
    userId: string,
    productId: string,
  ): Promise<ProductById> {
    const product = await this._productRepository.getById(productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (toUtc(product.endDate) < toUtc()) {
      throw new AuctionEndedError();
    }

    const lastBid = product.bids[product.bids.length - 1];

    const bidders = await this._bidRepository.getBidders(productId);

    if (!bidders.includes(userId)) {
      throw new AlreadyLeftAuctionError();
    }

    await this._bidRepository.retrieve(
      userId,
      productId,
      new Date(Date.now()).toISOString(),
    );

    if (lastBid && lastBid.bidderId === userId) {
      await this._notificationService.create({
        type: NotificationType.AUCTION_LEFT,
        userId: product.authorId,
        title: lang('notifications:title.AUCTION_LEFT', {}, 'en'),
        description: lang('notifications:description.AUCTION_LEFT', {}, 'en'),
        productId: productId,
      });
    }

    return this.getById(productId);
  }

  public async addToFavorites({
    userId,
    productId,
  }: AddProductToFavorites): Promise<string> {
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
  }: DeleteProductFromFavorites): Promise<string> {
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

  public async createProduct({
    req,
    userId,
    fieldsData,
  }: CreateProduct): Promise<ProductById> {
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

  private isAuctionProduct(type: string): boolean {
    return type === ProductType.AUCTION;
  }

  public async updateProduct({
    req,
    productId,
    userId,
    fieldsData,
  }: UpdateProduct): Promise<ProductById> {
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

  public async buy({
    userId,
    productId,
  }: BuyProduct): Promise<string | undefined> {
    const product = await this._productRepository.checkStatus(
      productId,
      ProductStatus.ACTIVE,
    );
    if (!product) {
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

    await this._notificationService.create({
      type: NotificationType.PRODUCT_SOLD,
      userId: product.authorId,
      title: lang('notifications:title.PRODUCT_SOLD', {}, 'en'),
      description: lang('notifications:description.PRODUCT_SOLD', {}, 'en'),
      productId: productId,
    });

    return productId;
  }

  public async getSimilar(productId: string): Promise<Product[]> {
    const product = await this._productRepository.getById(productId);
    const similarProducts = await this._productRepository.findSimilar(
      product.city,
      product.categoryId,
      product.type,
      product.id,
    );

    return similarProducts.map((product) => productMapper(product));
  }

  public async getMostPopularLots(limit: string): Promise<Product[]> {
    const mostPopular = await this._productRepository.getMostPopularLots(
      +limit,
    );

    return mostPopular.map((product) => productMapper(product));
  }

  public async getMostPopularProducts(limit: string): Promise<Product[]> {
    const mostPopular = await this._productRepository.getMostPopularProducts(
      +limit,
    );

    return mostPopular.map((product) => productMapper(product));
  }

  public async getEditProductById({ userId, productId }): Promise<Product> {
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
