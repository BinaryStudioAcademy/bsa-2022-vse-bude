import type { ProductDto } from '@vse-bude/shared';

export interface LotSectionProps {
  title: string;
  lots: ProductDto[];
  loadMoreTitle: string;
  loadMoreHref: string;
  loadImageHighPriority?: boolean;
}
