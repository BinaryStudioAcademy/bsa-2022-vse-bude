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
        imageLinks: true,
        minimalBid: true,
        country: true,
        city: true,
        phone: true,
        type: true,
        status: true,
        authorId: true,
        winnerId: true,
        recommendedPrice: true,
        categoryId: true,
        views: true,
        postDate: true,
        updatedAt: true,
        author: {
          select: {
            socialMedia: {
              select: {
                id: true,
                socialMedia: true,
                link: true,
              },
            },
          },
        },
      },

      orderBy: {
        createdAt: Order.DESC,
      },
    });
  }
}
