import { UnauthorizedError } from '@errors';
import type { ProductRepository, OrderRepository } from '@repositories';
import type { OrderById, OrderQuery } from '@types';
import type { CreateOrderDto } from '@vse-bude/shared';
import type { Order } from '@prisma/client';

export class OrderService {
  private _orderRepository: OrderRepository;

  private _productRepository: ProductRepository;

  constructor(
    orderRepository: OrderRepository,
    productRepository: ProductRepository,
  ) {
    this._orderRepository = orderRepository;
    this._productRepository = productRepository;
  }

  public async create(data: CreateOrderDto): Promise<Order & OrderById> {
    const product = await this._productRepository.getById(data.productId);
    if (!product) {
      throw new Error('Product not found');
    }

    const order = this._orderRepository.create(data);

    return order;
  }

  public async getAll({
    buyerId,
    productId,
    userId,
  }: OrderQuery): Promise<Order[]> {
    if (buyerId === userId) {
      return this._orderRepository.getAll({ buyerId, productId });
    }

    throw new UnauthorizedError();
  }

  public async getById(id: string): Promise<Order & OrderById> {
    return this._orderRepository.getById(id);
  }
}
