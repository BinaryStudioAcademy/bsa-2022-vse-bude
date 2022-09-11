import type { SelectOption } from '@components/primitives/select/types';
import type { Order, ProductQuery, SortBy } from '@vse-bude/shared';
import type { ProductType } from '@vse-bude/shared';
import type { MAX_PRICE_NAME, MIN_PRICE_NAME, ALL_PRODUCTS } from './utils';

export type SortByOption = SelectOption<{
  sortBy: SortBy;
  order: Order;
}>;
export type PriceOption = {
  [MIN_PRICE_NAME]: number;
  [MAX_PRICE_NAME]: number;
};
export type AllProductType = ProductType | typeof ALL_PRODUCTS;

export interface FilterHeaderProps {
  filter: ProductQuery;
  setFilter: (arg0: ProductQuery) => void;
}

export type FilterPopoverProps = FilterHeaderProps;
