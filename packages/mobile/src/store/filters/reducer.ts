import { createReducer } from '@reduxjs/toolkit';
import { FilterLotType } from '~/common/enums/enums';
import {
  MINIMUM_SLIDER_PRICE,
  MAXIMUM_SLIDER_PRICE,
} from '~/common/constants/constants';
import { SortBy } from '@vse-bude/shared';
import {
  setLotTypeFilter,
  setPriceRange,
  setSortBy,
  setCategory,
} from './auction';

type InitialState = {
  type: FilterLotType;
  categoryId: string;
  priceGt: number;
  priceLt: number;
  sortBy: string;
};

const initialState: InitialState = {
  type: FilterLotType.ALL,
  categoryId: '',
  priceGt: MINIMUM_SLIDER_PRICE,
  priceLt: MAXIMUM_SLIDER_PRICE,
  sortBy: SortBy.DATE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLotTypeFilter, (state, action) => {
      state.type = action.payload;
    })
    .addCase(setPriceRange, (state, action) => {
      state.priceGt = action.payload[0];
      state.priceLt = action.payload[1];
    })
    .addCase(setSortBy, (state, action) => {
      state.sortBy = action.payload;
    })
    .addCase(setCategory, (state, action) => {
      state.categoryId = action.payload;
    });
});

export { reducer };
