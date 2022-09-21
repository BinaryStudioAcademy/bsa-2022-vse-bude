import type {
  Prisma,
  PrismaClient,
  Product,
  FavoriteProducts,
} from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import { Order } from '@vse-bude/shared';
import type { Item, ProductById } from '@types';

export class MyListRepository {
  private _dbClient: PrismaClient;

  private _deleteBids({
    itemId,
  }: {
    itemId: string;
  }): Promise<Prisma.BatchPayload> {
    return this._dbClient.bid.deleteMany({
      where: {
        productId: itemId,
      },
    });
  }

  constructor(prismaClient: PrismaClient) {
    this._dbClient = prismaClient;
  }

  public getSoldItems({ userId }: { userId: string }): Promise<Item[]> {
    return this._dbClient.product.findMany({
      where: {
        authorId: userId,
        status: ProductStatus.SOLD,
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
        updatedAt: true,
      },
      orderBy: {
        updatedAt: Order.DESC,
      },
    });
  }

  public getPostedItems({ userId }: { userId: string }): Promise<Item[]> {
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
        type: true,
        status: true,
        views: true,
        postDate: true,
      },
      orderBy: {
        postDate: Order.DESC,
      },
    });
  }

  public getDraftedItems({ userId }: { userId: string }): Promise<Item[]> {
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
        type: true,
        status: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: Order.DESC,
      },
    });
  }

  public getArchived({ userId }: { userId: string }): Promise<Item[]> {
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
        imageLinks: true,
        type: true,
        status: true,
        views: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: Order.DESC,
      },
    });
  }

  public postItem({
    itemId,
    postDate,
  }: {
    itemId: string;
    postDate: string;
  }): Promise<Item> {
    return this._dbClient.product.update({
      where: {
        id: itemId,
      },
      data: {
        status: ProductStatus.ACTIVE,
        postDate,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        imageLinks: true,
        type: true,
        status: true,
        views: true,
        postDate: true,
      },
    });
  }

  public addItemToArchive({
    itemId,
    updatedAt,
  }: {
    itemId: string;
    updatedAt: string;
  }): Promise<Item> {
    this._deleteBids({ itemId });

    return this._dbClient.product.update({
      where: {
        id: itemId,
      },
      data: {
        status: ProductStatus.CANCELLED,
        updatedAt,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        imageLinks: true,
        type: true,
        status: true,
        views: true,
        updatedAt: true,
      },
    });
  }

  public checkWithStatus({
    itemId,
    status,
  }: {
    itemId: string;
    status: ProductStatus;
  }): Promise<{ title: string }> {
    return this._dbClient.product.findFirst({
      where: {
        id: itemId,
        status,
      },
      select: {
        title: true,
      },
    });
  }

  public getFavourites({ userId }: { userId: string }): Promise<
    (FavoriteProducts & {
      product: ProductById;
    })[]
  > {
    return this._dbClient.favoriteProducts.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
    });
  }

  public deleteProduct({ productId }: { productId: string }): Promise<Product> {
    return this._dbClient.product.delete({
      where: {
        id: productId,
      },
    });
  }
}
