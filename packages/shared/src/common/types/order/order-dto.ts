import type { ProductDto } from '../product';
import type { UserDto } from '../user';

export enum OrderStatus {
  CREATED = 'CREATED',
  PAID = 'PAID',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface OrderDto {
  id: string;
  product: ProductDto;
  productId: string;
  buyer: UserDto;
  buyerId: string;
  cost: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderDto {
  productId: string;
  buyerId: string;
  cost: number;
}
