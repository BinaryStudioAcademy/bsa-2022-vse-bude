import type { CategoryRepository } from '@repositories';
import type { Request } from 'express';
import { lang } from '../lang';

export class CategoryService {
  private _categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public async getAll(req: Request) {
    try {
      const result = await this._categoryRepository.getAll(req.query);

      return result.map((item) => ({
        ...item,
        title: lang(`translation:categories.${item.title}`),
      }));
    } catch (err) {
      throw new Error(err);
    }
  }
}
