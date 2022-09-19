import {
  ProductNotFoundError,
  ProductUnavailableError,
  UnauthorizedError,
  NotVerifiedError,
} from '@errors';
import type { ProductRepository, OrderRepository } from '@repositories';
import type { OrderById, OrderQuery } from '@types';
import type { CreateOrderDto } from '@vse-bude/shared';
import { ProductStatus, ProductType } from '@vse-bude/shared';
import type { Order, Product } from '@prisma/client';
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

    if (!this.isPossibleToCreateOrder(product)) {
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

  public async getById(id: string): Promise<OrderById> {
    return this._orderRepository.getById(id);
  }

  private isPossibleToCreateOrder(product: Product): boolean {
    if (
      product.type === ProductType.SELLING &&
      product.status === ProductStatus.ACTIVE
    ) {
      return true;
    }

    if (
      product.type === ProductType.AUCTION &&
      product.status === ProductStatus.FINISHED
    ) {
      return true;
    }

    return false;
  }
}
