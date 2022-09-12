import type { ProductType, ProductStatus } from '@prisma/client';
import type { Decimal } from '@prisma/client/runtime';

export type Items = {
  category: { title: string; id: string };
  type: ProductType;
  status: ProductStatus;
  city: string;
  country: string;
  title: string;
  description: string;
  phone: string;
};

export type SoldItems = {
  endDate: Date;
  id: string;
  title: string;
  price: Decimal;
  imageLinks: string[];
  type: ProductType;
  status: ProductStatus;
  winner: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
  };
};
