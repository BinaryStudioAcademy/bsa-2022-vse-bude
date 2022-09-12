import type { Prisma } from "@prisma/client";
import type { ProductType, ProductStatus, Condition } from "@vse-bude/shared";

export type CreateProductDto = {
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
    postDate: string | null;
    cancelReason: string | null;
    authorId: string;
    categoryId: string | null;
    winnerId: string | null;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    participantsNotified: boolean;
}
