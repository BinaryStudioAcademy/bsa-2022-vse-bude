import type { ProductQuery } from '@vse-bude/shared';

export type HeaderFilter = Omit<ProductQuery, 'from' | 'limit'>;
export type PaginationFilter = Pick<ProductQuery, 'from' | 'limit'>;
