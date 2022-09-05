import type { PrismaClient } from '@prisma/client';
import { OrderStatus } from '@vse-bude/shared';
import type { CreateOrderDto } from '@vse-bude/shared';

export class OrderRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public getAll() {
    return this._dbClient.order.findMany();
  }

  public getById(id: string) {
    return this._dbClient.order.findUnique({
      where: { id },
    });
  }

  public getByBuyerId(buyerId: string) {
    return this._dbClient.order.findMany({
      where: { buyerId },
    });
  }

  public getByProductId(productId: string) {
    return this._dbClient.order.findMany({
      where: { productId },
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
