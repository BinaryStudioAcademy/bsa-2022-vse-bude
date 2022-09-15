import { createAction } from '@reduxjs/toolkit';
import { FilterLotType } from '~/common/enums/enums';
import { ActionType } from './common';

const setLotTypeFilter = createAction<FilterLotType>(
  ActionType.SET_LOT_TYPE_FILTER,
);
const setPriceRange = createAction<number[]>(ActionType.SET_PRICE_RANGE);
const setSortBy = createAction<string>(ActionType.SET_SORT_BY);
const setCategory = createAction<string>(ActionType.SET_CATEGORY);

export { setLotTypeFilter, setPriceRange, setSortBy, setCategory };
