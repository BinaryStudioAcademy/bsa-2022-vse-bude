import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import { ProductNotFoundError } from '@errors';
import type { Request } from 'express';
import { getUserIdFromRequest } from '@helpers';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
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

    console.log('return product');

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
}
