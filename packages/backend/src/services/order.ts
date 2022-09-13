import {
  ProductNotFoundError,
  ProductUnavailableError,
  UnauthorizedError,
} from '@errors';
import type { ProductRepository, OrderRepository } from '@repositories';
import type { OrderById, OrderQuery } from '@types';
import type { CreateOrderDto } from '@vse-bude/shared';
import { ProductStatus } from '@vse-bude/shared';
import type { Order } from '@prisma/client';
import { NotVerifiedError } from 'error/user/not-verified';
import type { VerifyService } from './verify';

export class OrderService {
  private _orderRepository: OrderRepository;

  private _productRepository: ProductRepository;

  private _verifyService: VerifyService;

  constructor(
    orderRepository: OrderRepository,
    productRepository: ProductRepository,
    verifyService: VerifyService,
  ) {
    this._orderRepository = orderRepository;
    this._productRepository = productRepository;
    this._verifyService = verifyService;
  }

  public async create(data: CreateOrderDto): Promise<Order & OrderById> {
    const isUserVerified = await this._verifyService.isUserVerified(
      data.buyerId,
    );

    if (!isUserVerified) {
      throw new NotVerifiedError();
    }

    const product = await this._productRepository.getById(data.productId);
    if (!product) {
      throw new ProductNotFoundError();
    }

    if (product.status !== ProductStatus.ACTIVE) {
      throw new ProductUnavailableError();
    }

    const order = await this._orderRepository.create({
      ...data,
      cost: product.price as unknown as number,
    });

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
