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

export interface Bid {
  id: string;
  bidderId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

type ProductCondition = 'NEW' | 'USED';

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
  condition: ProductCondition;
  endDate: string;
  imageLinks: string[];
  views: number;
  currentPrice: number;
  author: Author;
  category: Category;
  cancelReason: string;
  winnerId?: string;
  createdAt: string;
  updatedAt: string;
  bids?: Bid[];
};

export type { ProductDto };
