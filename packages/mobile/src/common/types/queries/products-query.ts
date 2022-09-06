import { ProductType } from '@vse-bude/shared';

type ProductQuery = {
  limit?: number;
  type?: ProductType;
  categoryId?: string;
};

export type { ProductQuery };
