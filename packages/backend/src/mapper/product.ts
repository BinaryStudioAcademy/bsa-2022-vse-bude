import type { Product } from '@prisma/client';

export const productMapper = (productData: Product, currentPrice: number) => ({
  ...productData,
  currentPrice,
});
