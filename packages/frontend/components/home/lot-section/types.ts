import type { ProductDto } from '@vse-bude/shared';

export interface LotProps {
  title: string;
  lots: ProductDto[];
  loadMoreTitle: string;
  loadMoreHref: string;
}
