import type { PrismaClient } from '@prisma/client';
import type { CreateBidDto } from '@types';

export class BidRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  create(dto: CreateBidDto) {
    return this._dbClient.bid.create({
      data: {
        bidderId: dto.bidderId,
        productId: dto.productId,
        price: dto.price,
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
}
