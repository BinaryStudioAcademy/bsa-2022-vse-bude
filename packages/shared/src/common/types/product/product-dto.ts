import type { ProductType } from '../../enums';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid: number;
  city: string;
  type: ProductType;
  status: string;
  endDate: Date;
  imageLinks: string[];
  views: number;
  currentPrice: number;
};

export type { ProductDto };
