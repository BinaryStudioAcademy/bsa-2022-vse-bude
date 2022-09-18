import type {
  Condition,
  Prisma,
  ProductStatus,
  ProductType,
  SocialMedia,
  Bid,
} from '@prisma/client';

export type ProductById = {
  id: string;
  title: string;
  description: string;
  price: Prisma.Decimal;
  recommendedPrice: Prisma.Decimal | null;
  minimalBid: Prisma.Decimal | null;
  imageLinks: string[];
  country: string | null;
  city: string | null;
  phone: string | null;
  type: ProductType;
  status: ProductStatus;
  condition: Condition;
  endDate: Date | null;
  postDate: Date | null;
  cancelReason: string | null;
  authorId: string;
  author?: Author;
  categoryId: string | null;
  category?: {
    id: string;
    title: string;
  };
  winnerId: string | null;
  views: number;
  bids?: Bid[];
  createdAt: Date;
  updatedAt: Date;
  participantsNotified: boolean;
  currentPrice?: number;
};

type Author = {
  id: string;
  phone: string;
  socialMedia: SocialMedia[];
  firstName: string;
  lastName: string;
  avatar: string;
};
