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
  country: string;
  city?: string;
  phone?: string;
  type: ProductType;
  status: string;
  condition: string;
  endDate: string;
  imageLinks: string[];
  views: number;
  currentPrice: number;
  author: Author;
  category: Category;
  createdAt: string;
};

export type { ProductDto };
