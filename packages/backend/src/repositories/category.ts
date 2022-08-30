import type { PrismaClient, Category } from '@prisma/client';

export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(query: Query): Promise<Category[]> {
    return this._dbClient.category.findMany({
      take: query.limit ? +query.limit : undefined,
    });
  }
}
