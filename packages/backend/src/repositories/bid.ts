import type { Bid, Prisma, PrismaClient, Product } from '@prisma/client';
import type { CreateBidDto } from '@types';

export class BidRepository {
  private readonly _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  create({ bidderId, price, productId }: CreateBidDto): Promise<[Bid, Product]> {
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

  async getByUserAndProduct(userId: string, productId: string): Promise<Bid[]> {
    return this._dbClient.bid.findMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }

  async deleteAllByProductAndUser(userId: string, productId: string): Promise<Prisma.BatchPayload> {
    return this._dbClient.bid.deleteMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }
}
