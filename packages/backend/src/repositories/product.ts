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

  public async favoriteIds(userId: string) {
    return await this._dbClient.favoriteProducts.findMany({
      where: {
        userId,
      },
    });
  }

  public async getFavorite(userId: string) {
    return await this._dbClient.favoriteProducts.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          select: {
            title: true,
            description: true,
            price: true,
            imageLinks: true,
            status: true,
          },
        },
      },
    });
  }

  public async isInFavorite(userId: string, productId: string) {
    return await this._dbClient.favoriteProducts.findFirst({
      where: {
        userId: userId,
        productId: productId,
      },
    });
  }

  public async addToFavorites(userId: string, productId: string) {
    return await this._dbClient.favoriteProducts.create({
      data: {
        userId: userId,
        productId: productId,
      },
    });
  }

  public async deleteFromFavorites(userId: string, productId: string) {
    return await this._dbClient.favoriteProducts.delete({
      where: {
        userId_productId: {
          userId: userId,
          productId: productId,
        },
      },
    });
  }

  public incrementViews(id: string) {
    return this._dbClient.product.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  public async getCurrentPrice(productId: string) {
    const lastBid = await this._dbClient.bid.findFirst({
      where: {
        productId: productId,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });

    if (lastBid) {
      return lastBid.price;
    }

    const product = await this._dbClient.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        price: true,
      },
    });

    return product.price;
  }
}
