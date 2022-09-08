import type { Decimal } from '@prisma/client/runtime';
import type { Bid } from '@vse-bude/shared';

export const productMapper = (productData: any, currentPrice?: Decimal) => ({
  ...productData,
  price: Number(productData.price),
  recommendedPrice: productData.recommendedPrice
    ? Number(productData.recommendedPrice)
    : null,
  minimalBid: productData.minimalBid ? Number(productData.minimalBid) : null,
  currentPrice: Number(currentPrice),
  bids: productData?.bids.map(bidMapper),
});

export const bidMapper = (bid: Bid) => ({
  ...bid,
  price: Number(bid.price),
});
