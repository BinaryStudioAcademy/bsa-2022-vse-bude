import type { Product } from '@prisma/client';
import type { ProductById } from 'common/types/product';

export const productMapper = (
  productData: Product,
  currentPrice: number,
): ProductById => ({
  ...productData,
  currentPrice,
});
