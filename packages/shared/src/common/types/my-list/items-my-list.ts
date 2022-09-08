import type { StatusesItems } from './statuses-items';
import type { TypesItems } from './types-items';
import type { Author, Winner } from './related-user';
import type { SocialMedia } from '../social-media';
import type { ItemCategory } from './item-category';

export interface PurchasedItems {
  id: string;
  title: string;
  description: string;
  imageLinks: string[];
  price: number;
  type: TypesItems;
  status: StatusesItems;
  author: Author;
  endDate: string;
}

export interface SoldItems {
  id: string;
  title: string;
  description: string;
  imageLinks: string[];
  price: number;
  type: TypesItems;
  status: StatusesItems;
  winner: Winner;
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
  country?: string;
  city?: string;
  phone?: string;
  socialMedia: SocialMedia[];
  type: TypesItems;
  status: StatusesItems;
  category?: ItemCategory;
  views: number;
  postDate: string;
}

export interface DraftedItems {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  country?: string;
  city?: string;
  phone?: string;
  socialMedia: SocialMedia[];
  type: TypesItems;
  status: StatusesItems;
  category?: ItemCategory;
  updatedAt: true;
}

export interface CancelledItems {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  country?: string;
  city?: string;
  phone?: string;
  socialMedia: SocialMedia[];
  type: TypesItems;
  status: StatusesItems;
  category?: ItemCategory;
  views: number;
  postDate: string;
}
