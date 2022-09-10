import type { PrismaClient } from '@prisma/client';
import type { CategoryResponseDto } from '@vse-bude/shared';
import { ProductStatus } from '@vse-bude/shared';

export class CategoryRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public async getAll(query: Query): Promise<CategoryResponseDto[]> {
    const [result, count] = await this._dbClient.$transaction([
      this._dbClient.category.findMany({
        take: query.limit ? +query.limit : undefined,
      }),
      this._dbClient.product.groupBy({
        by: ['categoryId'],
        _count: true,
        where: {
          status: ProductStatus.ACTIVE,
        },
      }),
    ]);

    return result.map((item) => ({
      ...item,
      productsCount: count.find((c) => c.categoryId === item.id)?._count ?? 0,
    }));
  }
}
