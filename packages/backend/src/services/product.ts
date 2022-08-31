import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import { ProductNotFoundError } from '@errors';
import type { Request } from 'express';
import { getUserIdFromRequest } from '@helpers';
import type {
  AddProductToFavorites,
  BuyProduct,
  DeleteProductFromFavorites,
} from '@vse-bude/shared';
import { ProductStatus } from '@prisma/client';
import type { VerifyService } from '@services';

export class ProductService {
  private _productRepository: ProductRepository;

  private _verifyService: VerifyService;

  constructor(
    categoryRepository: ProductRepository,
    verifyService: VerifyService,
  ) {
    this._productRepository = categoryRepository;
    this._verifyService = verifyService;
  }

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public async getById(req: Request) {
    const { id } = req.params;
    const product = await this._productRepository.getById(id);
    if (!product) {
      throw new ProductNotFoundError();
    }

    product.category.title = req.t(`categories.${product.category.title}`);

    const currentPrice = await this._productRepository.getCurrentPrice(
      product.id,
    );

    return {
      ...product,
      currentPrice: currentPrice,
    };
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
