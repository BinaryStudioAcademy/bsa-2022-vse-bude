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
}
