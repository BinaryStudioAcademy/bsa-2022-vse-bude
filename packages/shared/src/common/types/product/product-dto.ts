import type { ProductType } from '../../enums/index';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: string;
  recommendedPrice: string;
  minimalBid: string;
  imageLinks: string[];
  city: string;
  type: ProductType;
  status: string;
  endDate: string;
  cancelReason: string;
  authorId: string;
  categoryId: string;
  winnerId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type { ProductDto };
