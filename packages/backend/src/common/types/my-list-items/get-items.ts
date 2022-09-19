import type { ProductType, ProductStatus } from '@prisma/client';
import type { Decimal } from '@prisma/client/runtime';

export type Item = {
  id: string;
  title: string;
  description?: string;
  price: Decimal;
  imageLinks: string[];
  type: ProductType;
  status: ProductStatus | 'PURCHASED';
  views?: number;
  winnerId?: string;
  authorId?: string;
  winner?: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
  };
  author?: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
  };
  updatedAt?: Date;
  postDate?: Date;
  endDate?: Date;
};

export type PurchasedItem = {
  product: Item;
  updatedAt: Date;
};
