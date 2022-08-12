import type { ProductStatus, ProductType } from '@enums';
import type { Bid } from './bid';
import type { Category } from './category';
import type { Chat } from './chat';
import type { SocialMedia } from './social-media';
import type { User } from './user';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  recomendedPrice?: number;
  minimalBid?: number;
  imageLinks: string[];
  city?: string[];
  type: ProductType;
  status: ProductStatus;
  endDate: string;
  cancellReason?: string;
  author: User;
  authorId: string;
  category?: Category;
  categoryId?: string;
  winner?: User;
  winnerId?: string;
  socialMedia: SocialMedia[];
  bids: Bid[];
  chat: Chat;
  createdAt: string;
  updatedAt: string;
}
