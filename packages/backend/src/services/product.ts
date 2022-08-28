import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import type { Request } from 'express';
import { getUserIdFromRequest } from '@helpers';
import type {
  AddProductToFavorites,
  DeleteProductFromFavorites,
} from '@vse-bude/shared';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
  }

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public getById(id: string) {
    return this._productRepository.getById(id);
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

  public async favoriteIds(userId: string) {
    const favProducts = await this._productRepository.favoriteIds(userId);

    return favProducts.map((favProd) => favProd.productId);
  }

  public async favorite(userId: string) {
    return await this._productRepository.favorite(userId);
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
}
