import type { PrismaClient, Product } from '@prisma/client';
import type { ProductQuery } from '@types';
import { Order } from '@vse-bude/shared';

export class ProductRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAll(query: ProductQuery): Promise<Product[]> {
    const {
      limit = 10,
      from = 0,
      type,
      sortBy = 'createdAt',
      order = Order.ASC,
    } = query;

    return this._dbClient.product.findMany({
      take: +limit,
      skip: +from,
      orderBy: {
        [sortBy]: order,
      },
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
        category: {
          select: {
            id: true,
            title: true,
          },
        },
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
