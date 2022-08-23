import type { PrismaClient, Product } from '@prisma/client';
import type { ProductQuery } from '@types';

export class ProductRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(query: ProductQuery): Promise<Product[]> {
    const { limit = 10, type } = query;

    return this._dbClient.product.findMany({
      take: +limit,
      where: {
        type,
      },
    });
  }

  public getById(id: string) {
    return this._dbClient.product.findUnique({
      where: {
        id,
      },
      include: {
        bids: true,
        author: {
          select: {
            id: true,
            phone: true,
            firstName: true,
            lastName: true,
            avatar: true,
            socialMedia: true,
          },
        },
      },
    });
  }
}
