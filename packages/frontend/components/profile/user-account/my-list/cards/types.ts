import type { WinnerDto, AuthorDto } from '@vse-bude/shared';

export interface PurchasedItems {
  title: string;
  imageLinks: string[];
  price: number;
  status: string;
  author: AuthorDto;
  endDate: string;
}

export interface SoldItems {
  title: string;
  imageLinks: string[];
  price: number;
  status: string;
  winner: WinnerDto;
  endDate: string;
}

export interface PostedItems {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  status: string;
  views: number;
  postDate: Date;
}

export interface DraftedItems {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  status: string;
  updatedAt: Date;
}

export interface ArchivedItems {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  status: string;
  postDate: Date;
}
