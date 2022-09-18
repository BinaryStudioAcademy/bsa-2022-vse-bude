import type { CategoryRepository } from '@repositories';
import type { CategoryResponseDto } from '@vse-bude/shared';
import { lang } from '@lang';

export class CategoryService {
  private _categoryRepository: CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public async getAll(): Promise<CategoryResponseDto[]> {
    try {
      const result = await this._categoryRepository.getAll();

      return result.map((item) => ({
        ...item,
        title: lang(`categories:${item.title}`),
      }));
    } catch (err) {
      throw new Error(err);
    }
  }
}
