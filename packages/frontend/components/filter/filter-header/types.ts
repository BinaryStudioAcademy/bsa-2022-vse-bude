import type { SelectOption } from '@components/primitives/select/types';
import type { Order, SortBy } from '@vse-bude/shared';
import type { ProductType } from '@vse-bude/shared';
import type { HeaderFilter } from '../types';
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
  filter: HeaderFilter;
  setFilter: (arg0: HeaderFilter) => void;
}

export type FilterPopoverProps = FilterHeaderProps;

export type BadgeOption = {
  value: string;
  name: string;
};
