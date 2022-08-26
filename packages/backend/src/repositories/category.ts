import type { PrismaClient, Category } from '@prisma/client';

export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(query: Query): Promise<Category[]> {
    const { limit = 10 } = query;

    return this._dbClient.category.findMany({
      take: +limit,
    });
  }
}
