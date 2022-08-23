import type { ProductType } from '@prisma/client';

export interface GetProductsRequest {
  type?: ProductType;
  limit?: string;
}
