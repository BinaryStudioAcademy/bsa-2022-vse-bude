import type { CategoryRepository } from '@repositories';

export class CategoryService {
  private _categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public getPopular() {
    return this._categoryRepository.getPopular(4);
  }
}
