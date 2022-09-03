import type { ProductType } from '../../enums';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid: number;
  country: string;
  city?: string;
  phone?: string;
  type: ProductType;
  status: string;
  endDate: Date;
  imageLinks: string[];
  views: number;
  currentPrice: number;
};

export type { ProductDto };
