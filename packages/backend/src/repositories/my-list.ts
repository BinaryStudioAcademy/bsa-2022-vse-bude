import type { PrismaClient } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import { Order } from '@vse-bude/shared';

export class MyListRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getAllUserItems({ userId }: { userId: string }) {
    return this._dbClient.product.findMany({
      where: {
        OR: [
          {
            authorId: userId,
            status: ProductStatus.DRAFT,
          },
          {
            authorId: userId,
            status: ProductStatus.ACTIVE,
          },
          {
            authorId: userId,
            status: ProductStatus.FINISHED,
          },
          {
            winnerId: userId,
            status: ProductStatus.FINISHED,
          },
        ],
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        recommendedPrice: true,
        minimalBid: true,
        country: true,
        city: true,
        phone: true,
        type: true,
        status: true,
        imageLinks: true,
        views: true,
        authorId: true,
        winnerId: true,
        categoryId: true,
        postDate: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: Order.DESC,
      },
    });
  }
}
