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

  async retrieve(userId: string, productId: string) {
    return this._dbClient.$transaction([
      this._dbClient.bid.deleteMany({
        where: {
          bidderId: userId,
          productId: productId,
        },
      }),
      this._dbClient.product.update({
        data: { price: (await this._dbClient.bid.findFirst({
          where: {
            productId: productId,
          }
        })).price },
        where: { id: productId },
      }),
    ]);
  }
}
