import type { Bid, Prisma, PrismaClient, Product } from '@prisma/client';
import type { CreateBidDto } from '@types';

export class BidRepository {
  private readonly _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  create({
    bidderId,
    price,
    productId,
  }: CreateBidDto): Promise<[Bid, Product]> {
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

  async lastProductBid(productId: string): Promise<Bid> {
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

  async getByUserAndProduct(userId: string, productId: string): Promise<Bid[]> {
    return this._dbClient.bid.findMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }

  async deleteAllByProductAndUser(
    userId: string,
    productId: string,
  ): Promise<Prisma.BatchPayload> {
    return this._dbClient.bid.deleteMany({
      where: {
        bidderId: userId,
        productId: productId,
      },
    });
  }

  async retrieve(
    userId: string,
    productId: string,
    time: string,
  ): Promise<Product> {
    await this._dbClient.bid.updateMany({
      data: {
        deletedAt: time,
      },
      where: {
        bidderId: userId,
        productId: productId,
      },
    });

    await this._dbClient.bid.deleteMany({
      where: {
        productId,
        NOT: [{ deletedAt: null }],
      },
    });

    return this._dbClient.product.update({
      data: {
        price:
          (
            await this._dbClient.bid.findFirst({
              where: {
                productId,
              },
            })
          )?.price ||
          (
            await this._dbClient.product.findUnique({
              where: {
                id: productId,
              },
            })
          ).recommendedPrice,
      },
      where: { id: productId },
    });
  }

  async getAll(productId: string): Promise<Bid[]> {
    return this._dbClient.bid.findMany({
      where: {
        productId,
      },
    });
  }

  public async getBidders(productId: string): Promise<string[]> {
    const biddersObject = await this._dbClient.bid.findMany({
      where: {
        productId,
      },
      select: {
        bidderId: true,
      },
      distinct: ['bidderId'],
    });

    return biddersObject.map((bidder) => bidder.bidderId);
  }
}
