import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';
import { ProductNotFoundError } from '@errors';
import type { Request } from 'express';

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

    return product;
  }
}
