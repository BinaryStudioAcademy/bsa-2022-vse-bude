import { createAction } from '@reduxjs/toolkit';
import { ProductQuery } from '@vse-bude/shared';
import { ActionType } from './common';

const setLotType = createAction<ProductQuery['type']>(
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

const update = createAction<Partial<ProductQuery>>(ActionType.UPDATE);

const reset = createAction(ActionType.RESET);

export {
  setLotType,
  setPriceRange,
  setSortBy,
  setCategory,
  setOrder,
  reset,
  update,
};
