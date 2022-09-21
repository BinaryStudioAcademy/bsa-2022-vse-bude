import type { PrismaClient, Order, PrismaPromise } from '@prisma/client';
import {
  type CreateOrderDto,
  OrderStatus,
  Order as DateOrder,
} from '@vse-bude/shared';
import type { OrderById, OrderQuery, PurchasedItem } from '@types';

export class OrderRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public getAll({ buyerId, productId }: OrderQuery): Promise<Order[]> {
    return this._dbClient.order.findMany({
      where: {
        buyerId,
        productId,
      },
    });
  }

  public getPurchasedItems({
    userId,
  }: {
    userId: string;
  }): PrismaPromise<PurchasedItem[]> {
    return this._dbClient.order.findMany({
      where: {
        buyerId: userId,
        status: OrderStatus.PAID,
      },
      select: {
        product: {
          select: {
            id: true,
            title: true,
            imageLinks: true,
            price: true,
            type: true,
            status: true,
            winnerId: true,
            author: {
              select: {
                id: true,
                avatar: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        updatedAt: true,
      },
      orderBy: {
        updatedAt: DateOrder.DESC,
      },
    });
  }

  public getPurchasedItemById({ productId }: { productId: string }): Promise<{
    product: {
      title: string;
    };
  }> {
    return this._dbClient.order.findFirst({
      where: { productId, status: OrderStatus.PAID },
      select: {
        product: {
          select: {
            title: true,
          },
        },
      },
    });
  }

  public getById(id: string): Promise<OrderById> {
    return this._dbClient.order.findUnique({
      where: { id },
      include: {
        product: true,
        buyer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });
  }

  public async create({
    productId,
    buyerId,
    cost,
  }: CreateOrderDto): Promise<Order & OrderById> {
    return this._dbClient.order.create({
      data: {
        productId,
        buyerId,
        cost,
        status: OrderStatus.CREATED,
      },
      include: {
        product: true,
        buyer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });
  }

  public updateStatus(id: string, status: OrderStatus): Promise<Order> {
    return this._dbClient.order.update({
      where: { id },
      data: { status },
    });
  }
}
