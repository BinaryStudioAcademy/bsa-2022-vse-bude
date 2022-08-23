import type { ProductType } from '@prisma/client';

export interface ProductQuery {
  limit?: string;
  type?: ProductType;
}
