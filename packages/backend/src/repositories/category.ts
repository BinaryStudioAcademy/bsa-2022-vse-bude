import type { PrismaClient, Category } from '@prisma/client';
import { Get, Query, Route } from 'tsoa';

@Route('category')
export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  @Get('getAll')
  public getAll(@Query() take: number): Promise<Category[]> {
    return this._dbClient.category.findMany({
      take,
    });
  }
}
