import type { ProductRepository } from '@repositories';
import type { GetProductsRequest } from '@types';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
  }

  public getByType({ type, limit }: GetProductsRequest) {
    const take = limit ? +limit : 10;

    return this._productRepository.getByType(type, take);
  }

  public getById(id: string) {
    return this._productRepository.getById(id);
  }
}
