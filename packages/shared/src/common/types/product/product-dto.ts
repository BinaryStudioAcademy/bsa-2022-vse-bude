import type { ProductType } from '../../enums';

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
}

interface Category {
  id: string;
  title: string;
}

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
  author: Author;
  category: Category;
};

export type { ProductDto };
