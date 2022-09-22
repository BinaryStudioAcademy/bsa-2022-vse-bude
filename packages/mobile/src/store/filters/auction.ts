import { createAction } from '@reduxjs/toolkit';
import { ProductQuery, ProductType } from '@vse-bude/shared';
import { ActionType } from './common';

const setLotType = createAction<ProductType | undefined>(
  ActionType.SET_LOT_TYPE_FILTER,
);
const setPriceRange = createAction<ProductQuery['priceGt'][]>(
  ActionType.SET_PRICE_RANGE,
);
const setSortBy = createAction<ProductQuery['sortBy']>(ActionType.SET_SORT_BY);
const setCategory = createAction<ProductQuery['categoryId']>(
  ActionType.SET_CATEGORY,
);
const setOrder = createAction<ProductQuery['order']>(ActionType.SET_ORDER);
const resetFilters = createAction(ActionType.RESET);

export {
  setLotType,
  setPriceRange,
  setSortBy,
  setCategory,
  setOrder,
  resetFilters,
};
