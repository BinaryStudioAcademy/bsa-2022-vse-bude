import type { Winner, Author } from '@vse-bude/shared';

export interface PurchasedItems {
  title: string;
  imageLinks: string[];
  price: string;
  status: string;
  author: Author;
  endDate: string;
}

export interface SoldItems {
  title: string;
  imageLinks: string[];
  price: string;
  status: string;
  winner: Winner;
  endDate: string;
}

export interface PostedItems {
  id: string;
  title: string;
  description: string;
  price: string;
  recommendedPrice?: string;
  minimalBid?: string;
  imageLinks: string[];
  status: string;
  views: string;
  postDate: string;
}

export interface DraftedItems {
  id: string;
  title: string;
  description: string;
  price: string;
  recommendedPrice?: string;
  minimalBid?: string;
  imageLinks: string[];
  status: string;
  updatedAt: string;
}

export interface CancelledItems {
  id: string;
  title: string;
  description: string;
  price: string;
  recommendedPrice?: string;
  minimalBid?: string;
  imageLinks: string[];
  status: string;
  postDate: string;
}
