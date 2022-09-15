import type { ProductDto } from '@vse-bude/shared';
import type React from 'react';

export type ProductSectionProps = {
  headerText: string;
  items: ProductDto[] | null;
  Card: React.FC;
};
