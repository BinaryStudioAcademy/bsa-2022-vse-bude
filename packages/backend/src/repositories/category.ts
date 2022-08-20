import type { PrismaClient, Category } from '@prisma/client';

export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(take: number): Promise<Category[]> {
    return this._dbClient.category.findMany({
      take,
    });
  }
}
