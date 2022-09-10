import type { CategoryRepository } from '@repositories';
import type { CategoryResponseDto } from '@vse-bude/shared';
import type { Request } from 'express';
import { lang } from '../lang';

export class CategoryService {
  private _categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public async getAll(req: Request): Promise<CategoryResponseDto[]> {
    try {
      const result = await this._categoryRepository.getAll(req.query);

      return result.map((item) => ({
        ...item,
        title: lang(`categories:${item.title}`),
      }));
    } catch (err) {
      throw new Error(err);
    }
  }
}
