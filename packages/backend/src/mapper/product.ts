import type { Decimal } from '@prisma/client/runtime';
import type { Bid } from '@vse-bude/shared';

const convertDecimal = (value: any) => (value ? Number(value) : null);

export const productMapper = (productData: any, currentPrice?: Decimal) => ({
  ...productData,
  price: Number(productData.price),
  recommendedPrice: convertDecimal(productData.recommendedPrice),
  minimalBid: convertDecimal(productData.minimalBid),
  currentPrice: convertDecimal(currentPrice),
  bids: productData?.bids?.map(bidMapper),
});

export const bidMapper = (bid: Bid) => ({
  ...bid,
  price: Number(bid.price),
});
