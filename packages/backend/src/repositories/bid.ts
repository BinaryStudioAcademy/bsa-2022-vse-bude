import type { PrismaClient } from '@prisma/client';
import type { CreateBidDto } from '@types';

export class BidRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  create({ bidderId, price, productId }: CreateBidDto) {
    return this._dbClient.$transaction([
      this._dbClient.bid.create({
        data: {
          bidderId,
          productId,
          price,
        },
      }),
      this._dbClient.product.update({
        data: { price },
        where: { id: productId },
      }),
    ]);
  }

  async lastProductBid(productId: string) {
    return await this._dbClient.bid.findFirst({
      take: 1,
      where: {
        productId: productId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getByUserAndProduct(userId: string, productId: string) {
    return this._dbClient.bid.findMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }

  async deleteAllByProductAndUser(userId: string, productId: string) {
    return this._dbClient.bid.deleteMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }

  async retrieve(userId: string, productId: string, time: string) {
    return this._dbClient.$transaction([
      this._dbClient.bid.updateMany({
        data: {
          deletedAt: time,
        },
        where: {
          bidderId: userId,
          productId: productId,
        },
      }),
      this._dbClient.bid.deleteMany({
        where: {
          productId,
          NOT: [{ deletedAt: null }],
        },
      }),
      this._dbClient.product.update({
        data: {
          price: (
            await this._dbClient.bid.findFirst({
              where: {
                productId,
              },
            })
          ).price,
        },
        where: { id: productId },
      }),
    ]);
  }

  async getAll(productId: string) {
    return this._dbClient.bid.findMany({
      where: {
        productId,
      },
    });
  }
}
