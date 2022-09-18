import type { Product, Prisma, OrderStatus } from '@prisma/client';

export type OrderById = {
  id?: string;
  product: Product;
  productId?: string;
  createdAt?: Date;
  cost?: Prisma.Decimal;
  status?: OrderStatus;
  buyerId?: string;
  buyer: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
};
