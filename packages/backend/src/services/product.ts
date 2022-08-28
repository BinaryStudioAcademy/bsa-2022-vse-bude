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

  public async favorite() {
    return await this._productRepository.favorite(
      'c3e590c5-385b-41bb-88d7-e893eeb80724',
    );
  }

  public async addToFavorites({ userId, productId }: AddProductToFavorites) {
    return await this._productRepository.addToFavorites(userId, productId);
  }

  public async deleteFromFavorites({
    userId,
    productId,
  }: DeleteProductFromFavorites) {
    return await this._productRepository.deleteFromFavorites(userId, productId);
  }
}
