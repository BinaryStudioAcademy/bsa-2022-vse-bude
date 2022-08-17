import type { PrismaClient, News } from '@prisma/client';

export class NewsRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(take: number): Promise<News[]> {
    return this._dbClient.news.findMany({
      take,
    });
  }
}
