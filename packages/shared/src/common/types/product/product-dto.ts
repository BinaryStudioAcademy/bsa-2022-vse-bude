import type { ProductType } from '../../enums/index';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: string;
  recomendedPrice: string;
  minimalBid: string;
  imageLinks: string[];
  city: string;
  type: ProductType;
  status: string;
  endDate: string;
  cancellReason: string;
  authorId: string;
  categoryId: string;
  winnerId: string | boolean;
  createdAt: string;
  updatedAt: string;
};

export type { ProductDto };
