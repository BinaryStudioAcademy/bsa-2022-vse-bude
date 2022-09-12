import type { UserProfileDto } from '@vse-bude/shared';

export interface ItemCard {
  id: string;
  title: string;
  description: string;
  imageLinks: string[];
  price: number;
  recommendedPrice?: number;
  minimalBid?: number;
  author: UserProfileDto;
  winner: UserProfileDto;
  views: number;
  endDate: string;
  postDate: string;
  updatedAt: string;
}
