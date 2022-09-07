import { ProductType } from '@vse-bude/shared';

type ProductRequestDto = {
  limit?: number;
  type?: ProductType;
  categoryId?: string;
};

export type { ProductRequestDto };
