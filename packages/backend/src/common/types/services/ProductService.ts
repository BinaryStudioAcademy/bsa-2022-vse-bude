import type { ProductType } from '@prisma/client';
import type { Order } from '@vse-bude/shared';

export interface ProductQuery {
  limit?: number;
  from?: number;
  type?: ProductType;
  categoryId?: string;
  sortBy?: string;
  order?: Order;
}
