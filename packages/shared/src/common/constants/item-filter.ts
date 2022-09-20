import { Order, ProductType, SortBy } from '../enums';
import { MAX_PRICE } from './price';

export const ITEM_FILTER = {
  PRICE_GT_DEFAULT: 0,
  PRICE_LT_DEFAULT: MAX_PRICE,
  SORT_BY_DEFAULT: SortBy.DATE,
  ORDER_DEFAULT: Order.ASC,
  PRODUCT_TYPE_DEFAULT: ProductType.AUCTION,
  PRODUCT_LIMIT_DEFAULT: 10,
  PRODUCT_FROM_DEFAULT: 0,
};
