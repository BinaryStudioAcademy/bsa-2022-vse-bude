import type { ProductType } from '@prisma/client';
import type { ProductRepository } from '@repositories';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
  }

  public getByType(query: Query) {
    console.log(query);

    const take = query.limit ? +query.limit : 10;
    const type = query.type as ProductType;

    return this._productRepository.getByType(type, take);
  }

  public getById(id: string) {
    return this._productRepository.getById(id);
  }
}
