import type { PrismaClient, PrismaPromise } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import { Order } from '@vse-bude/shared';
import type { Items } from 'common/types/items';
import type { SoldItems } from 'common/types/items/getItems';

export class MyListRepository {
  private _dbClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getPurchasedItems({ userId }: { userId: string }): Promise<object[]> {
    return this._dbClient.product.findMany({
      where: {
        winnerId: userId,
        status: ProductStatus.FINISHED,
      },
      select: {
        id: true,
        title: true,
        imageLinks: true,
        price: true,
        type: true,
        status: true,
        winnerId: true,
        author: {
          select: {
            id: true,
            avatar: true,
            firstName: true,
            lastName: true,
          },
        },
        endDate: true,
      },
      orderBy: {
        endDate: Order.DESC,
      },
    });
  }

  public getSoldItems({
    userId,
  }: {
    userId: string;
  }): PrismaPromise<SoldItems[]> {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.FINISHED,
      },
      select: {
        id: true,
        title: true,
        imageLinks: true,
        price: true,
        type: true,
        status: true,
        authorId: true,
        winner: {
          select: {
            id: true,
            avatar: true,
            firstName: true,
            lastName: true,
          },
        },
        endDate: true,
      },
      orderBy: {
        endDate: Order.DESC,
      },
    });
  }

  public getPostedItems({
    userId,
  }: {
    userId: string;
  }): PrismaPromise<Items[]> {
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
        recommendedPrice: true,
        minimalBid: true,
        imageLinks: true,
        country: true,
        city: true,
        phone: true,
        socialMedia: {
          select: {
            id: true,
            socialMedia: true,
            link: true,
          },
        },
        type: true,
        status: true,
        category: {
          select: {
            id: true,
            title: true,
          },
        },
        views: true,
        postDate: true,
      },
      orderBy: {
        postDate: Order.DESC,
      },
    });
  }

  public getDraftedItems({ userId }: { userId: string }): Promise<Items[]> {
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
        recommendedPrice: true,
        minimalBid: true,
        imageLinks: true,
        country: true,
        city: true,
        phone: true,
        socialMedia: {
          select: {
            id: true,
            socialMedia: true,
            link: true,
          },
        },
        type: true,
        status: true,
        category: {
          select: {
            id: true,
            title: true,
          },
        },
        updatedAt: true,
      },
      orderBy: {
        updatedAt: Order.DESC,
      },
    });
  }

  public getArchived({ userId }: { userId: string }): Promise<Items[]> {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.CANCELLED,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        recommendedPrice: true,
        minimalBid: true,
        imageLinks: true,
        country: true,
        city: true,
        phone: true,
        socialMedia: {
          select: {
            id: true,
            socialMedia: true,
            link: true,
          },
        },
        type: true,
        status: true,
        category: {
          select: {
            id: true,
            title: true,
          },
        },
        views: true,
        endDate: true,
      },
      orderBy: {
        endDate: Order.DESC,
      },
    });
  }
}
