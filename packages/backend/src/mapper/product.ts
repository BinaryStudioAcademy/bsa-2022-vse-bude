import type { Decimal } from '@prisma/client/runtime';

export const productMapper = (productData: any, currentPrice?: Decimal) => ({
  ...productData,
  price: Number(productData.price),
  recommendedPrice: productData.recommendedPrice
    ? Number(productData.recommendedPrice)
    : null,
  minimalBid: productData.minimalBid ? Number(productData.minimalBid) : null,
  currentPrice: Number(currentPrice),
});
