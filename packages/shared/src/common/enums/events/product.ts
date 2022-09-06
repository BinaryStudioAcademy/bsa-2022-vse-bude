export const UPDATE_PRODUCT_PRICE = 'update_product_price';
export const AUCTION_ITEM_NS_PREFIX = 'auction-item';
export const AUCTION_ITEM_NS = (itemId: string) =>
  `${AUCTION_ITEM_NS_PREFIX}-${itemId}`;
