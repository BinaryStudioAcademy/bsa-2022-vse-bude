import { createAction } from '@reduxjs/toolkit';
import { FilterLotType } from '~/common/enums/enums';
import { ProductQuery } from '@vse-bude/shared';
import { ActionType } from './common';

const setLotTypeFilter = createAction<FilterLotType>(
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

export { setLotTypeFilter, setPriceRange, setSortBy, setCategory, setOrder };
