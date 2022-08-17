import type { ProductType } from '@prisma/client';
import type { ProductRepository } from '@repositories';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
  }

  public getAll() {
    return this._productRepository.getAll();
  }

  public getByType(type: ProductType, query: Query) {
    const take = query.limit ? +query.limit : 10;

    return this._productRepository.getByType(type, take);
  }
}
