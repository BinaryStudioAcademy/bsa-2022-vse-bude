import type { CategoryDto } from '../category';
import type { SocialMedia } from '../social-media';
import type { UserProfileDto } from '../profile';
import type { ProductType, ProductStatus } from '../../enums';
import type { Bid } from '../bid';

export enum Condition {
  NEW = 'NEW',
  USED = 'USED',
}

interface ProductDto {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid?: number;
  imageLinks: string[];
  country: string;
  city: string;
  phone: string;
  socialMedia: SocialMedia[];
  type: ProductType;
  status: ProductStatus;
  cancelReason: string;
  bids?: Bid[];
  condition: Condition;
  category: CategoryDto;
  views: number;
  authorId: string;
  author: UserProfileDto;
  winnerId: string;
  winner: UserProfileDto;
  updatedAt: string;
  postDate: string;
  createdAt: string;
  endDate: string;
  currentPrice: number;
}

export type { ProductDto };
