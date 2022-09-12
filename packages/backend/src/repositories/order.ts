import type { PrismaClient, Product, Order } from '@prisma/client';
import { ProductStatus } from '@prisma/client';
import { type CreateOrderDto, type OrderDto, OrderStatus } from '@vse-bude/shared';
import type { OrderQuery } from '@types';

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

  public getById(id: string): Promise<OrderDto> {
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
  }: CreateOrderDto): Promise<Order & { product: Product; buyer: { id: string; email: string; firstName: string; lastName: string; phone: string; }; }> {
    const product: Product = await this._dbClient.product.findUnique({
      where: { id: productId },
    });

    if (product.status === ProductStatus.ACTIVE) {
      return this._dbClient.order.create({
        data: {
          productId,
          buyerId,
          cost: product.price,
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

    return null;
  }

  public updateStatus(id: string, status: OrderStatus): Promise<Order> {
    return this._dbClient.order.update({
      where: { id },
      data: { status },
    });
  }
}
