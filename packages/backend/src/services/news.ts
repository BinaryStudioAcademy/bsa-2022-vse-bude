import type { News } from '@prisma/client';
import type { NewsRepository } from '@repositories';

export class NewsService {
  private _newsRepository: NewsRepository;

  constructor(newsRepository: NewsRepository) {
    this._newsRepository = newsRepository;
  }

  public getAll(query: Query): Promise<News[]> {
    const take = query.limit ? +query.limit : 10;

    return this._newsRepository.getAll(take);
  }
}
