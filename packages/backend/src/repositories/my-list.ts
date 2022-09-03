import type { PrismaClient } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import { Order } from '@vse-bude/shared';

export class MyListRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getPurchasedItems({ userId }: { userId: string }) {
    return this._dbClient.product.findMany({
      where: {
        winnerId: userId,
        status: ProductStatus.FINISHED,
      },
      select: {
        id: true,
        title: true,
        description: true,
        imageLinks: true,
      },
      orderBy: {
        endDate: Order.DESC,
      },
    });
  }

  public getSoldItems({ userId }: { userId: string }) {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.FINISHED,
      },
      select: {
        id: true,
        title: true,
        description: true,
        imageLinks: true,
      },
      orderBy: {
        endDate: Order.DESC,
      },
    });
  }

  public getDraftedItems({ userId }: { userId: string }) {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.DRAFT,
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
        recommendedPrice: true,
        categoryId: true,
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

  public getPostedItems({ userId }: { userId: string }) {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.ACTIVE,
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
        recommendedPrice: true,
        categoryId: true,
        views: true,
        postDate: true,
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
