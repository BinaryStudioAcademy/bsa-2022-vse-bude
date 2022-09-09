import type { Order, ProductType, SortBy } from '../../enums';

export interface ProductQuery {
  type?: ProductType;
  categoryId?: string;
  sortBy?: SortBy;
  order?: Order;
  limit?: number;
  from?: number;
  priceGt?: number;
  priceLt?: number;
}
