import type { Condition, Prisma, ProductStatus, ProductType } from "@prisma/client";

export type ProductById = {
    id: string
    title: string,
    description: string,
    price: Prisma.Decimal,
    recommendedPrice: Prisma.Decimal | null,
    minimalBid: Prisma.Decimal | null,
    imageLinks: string[],
    country: string | null,
    city: string | null,
    phone: string | null,
    type: ProductType,
    status: ProductStatus,
    condition: Condition,
    endDate: Date | null,
    postDate: Date | null,
    cancelReason: string | null,
    authorId: string,
    categoryId: string | null,
    winnerId: string | null,
    views: number,
    createdAt: Date,
    updatedAt: Date,
    participantsNotified: boolean,
    currentPrice: number,
  };
  