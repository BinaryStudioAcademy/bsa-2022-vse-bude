import type { Prisma, ProductType, ProductStatus } from '@prisma';

export interface MyListItem {
  id: string;
  title: string;
  description: string;
  price: Prisma.Decimal;
  recommendedPrice: Prisma.Decimal;
  minimalBid: Prisma.Decimal;
  country: string;
  city: string;
  phone: string;
  type: ProductType;
  status: ProductStatus;
  imageLinks: string[];
  views: number;
  authorId: string;
  winnerId: string;
  categoryId: string;
  postDate: Date;
  updatedAt: Date;
}

export interface MyListResponse {
  userItemsList: MyListItem[];
}
