import type { Product } from '@prisma/client';

export interface AllProductsResponse {
  items: Product[];
  count: number;
}
