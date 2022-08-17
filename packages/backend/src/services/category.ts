import type { CategoryRepository } from '@repositories';

export class CategoryService {
  private _categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public getAll(query: Query) {
    const take = query.limit ? +query.limit : 10;

    return this._categoryRepository.getAll(take);
  }
}
