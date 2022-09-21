import type { UserProfileDto } from '@vse-bude/shared';

export type ItemCard = {
  id: string;
  title: string;
  description: string;
  imageLinks: string[];
  price: number;
  type: string;
  recommendedPrice?: number;
  minimalBid?: number;
  author: UserProfileDto;
  winner: UserProfileDto;
  views: number;
  endDate: string;
  postDate: string;
  updatedAt: string;
};

export type CardProps = {
  data: ItemCard;
};
