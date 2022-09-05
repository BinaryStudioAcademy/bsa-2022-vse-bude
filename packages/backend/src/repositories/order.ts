import type { PrismaClient } from '@prisma/client';
import { type CreateOrderDto, OrderStatus } from '@vse-bude/shared';
import type { OrderQuery } from '@types';

export class OrderRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public getAll({ buyerId, productId }: OrderQuery) {
    return this._dbClient.order.findMany({
      where: {
        buyerId,
        productId,
      },
    });
  }

  public getById(id: string) {
    return this._dbClient.order.findUnique({
      where: { id },
    });
  }

  public create({ productId, buyerId, cost }: CreateOrderDto) {
    return this._dbClient.order.create({
      data: {
        productId,
        buyerId,
        cost,
        status: OrderStatus.CREATED,
      },
    });
  }

  public updateStatus(id: string, status: OrderStatus) {
    return this._dbClient.order.update({
      where: { id },
      data: { status },
    });
  }
}
