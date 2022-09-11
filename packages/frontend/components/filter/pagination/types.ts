import type { ProductQuery } from '@vse-bude/shared';

export interface PaginationProps {
  filter: ProductQuery;
  setFilter: (arg0: ProductQuery) => void;
}
