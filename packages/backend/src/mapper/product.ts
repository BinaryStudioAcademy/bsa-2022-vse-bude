import type { Bid } from '@prisma/client';
import type { Decimal } from '@prisma/client/runtime';
import type { MappedBid } from '@types';
import type { ProductById } from 'common/types/product';

const convertDecimal = (value: any): number | null =>
  value ? Number(value) : null;

export const productMapper = (
  productData: any,
  currentPrice?: Decimal,
): ProductById => ({
  ...productData,
  price: Number(productData.price),
  recommendedPrice: convertDecimal(productData.recommendedPrice),
  minimalBid: convertDecimal(productData.minimalBid),
  currentPrice: convertDecimal(currentPrice),
  bids: productData?.bids?.map(bidMapper),
});

export const bidMapper = (bid: Bid): MappedBid => ({
  ...bid,
  price: Number(bid.price),
});
