import type { ProductRepository, OrderRepository } from '@repositories';
import type { OrderQuery } from '@types';
import type { CreateOrderDto } from '@vse-bude/shared';

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

  public async create(createOrderDto: CreateOrderDto) {
    const product = await this._productRepository.getById(
      createOrderDto.productId,
    );
    if (!product) {
      throw new Error('Product not found');
    }

    return this._orderRepository.create(createOrderDto);
  }

  public async getAll({ buyerId, productId }: OrderQuery) {
    return this._orderRepository.getAll({ buyerId, productId });
  }

  public async getById(id: string) {
    return this._orderRepository.getById(id);
  }
}
