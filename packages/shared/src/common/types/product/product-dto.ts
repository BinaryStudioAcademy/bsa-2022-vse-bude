import type { ProductType } from '../../enums';

type ProductDto = {
  id: string;
  title: string;
  description: string;
  price: number;
  recomendedPrice: number;
  minimalBid: number;
  city: string;
  type: ProductType;
  status: string;
  endDate: Date;
  imageLinks: string[];
};

export type { ProductDto };
