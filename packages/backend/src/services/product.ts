import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import { ProductNotFoundError } from '@errors';
import type { Request } from 'express';
import { getUserIdFromRequest } from '@helpers';
import type {
  AddProductToFavorites,
  BuyProduct,
  DeleteProductFromFavorites,
  CreateProduct,
  UpdateProduct,
} from '@vse-bude/shared';
import type { Product } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import type { VerifyService } from '@services';
import type { S3StorageService } from './s3-storage';

export class ProductService {
  private _productRepository: ProductRepository;

  private _verifyService: VerifyService;

  private _s3StorageService: S3StorageService;

  constructor(
    categoryRepository: ProductRepository,
    verifyService: VerifyService,
    s3StorageService: S3StorageService,
  ) {
    this._productRepository = categoryRepository;
    this._verifyService = verifyService;
    this._s3StorageService = s3StorageService;
  }

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public async getById(req: Request) {
    const { id } = req.params;
    const product = await this._productRepository.getById(id);
    if (!product) {
      throw new ProductNotFoundError(req);
    }

    if (product.category) {
      product.category.title = req.t(`categories.${product.category.title}`);
    }

    return product;
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
    const imageLinks = await this._s3StorageService.uploadProductImages(req);
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
    const product = (await this._productRepository.getById(
      productId,
    )) as Product;
    const newImageLinks = await this._s3StorageService.uploadProductImages(req);
    const oldImages = fieldsData?.images || [];
    const deletedImages = product.imageLinks.reduce(
      (acc, item) => (oldImages.includes(item) ? acc : [item, ...acc]),
      [],
    );

    deletedImages.forEach(
      async (image) => await this._s3StorageService.deleteImage(image),
    );

    const imageLinks = oldImages
      ? [...oldImages, ...newImageLinks]
      : newImageLinks;

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
}
