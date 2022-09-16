import type { ProductDto } from '@vse-bude/shared';
import type React from 'react';
import type { CardProps } from '../cards/types';

export type ProductSectionProps = {
  headerText: string;
  items: ProductDto[] | null;
  Card: React.FC<CardProps>;
};
