import { createReducer } from '@reduxjs/toolkit';
import { FilterLotType } from '~/common/enums/enums';
import {
  MINIMUM_SLIDER_PRICE,
  MAXIMUM_SLIDER_PRICE,
} from '~/common/constants/constants';
import { SortBy, ProductQuery, Order } from '@vse-bude/shared';
import {
  setLotTypeFilter,
  setPriceRange,
  setSortBy,
  setCategory,
  setOrder,
} from './auction';

type InitialState = {
  type: FilterLotType;
  categoryId: ProductQuery['categoryId'];
  priceGt: ProductQuery['priceGt'];
  priceLt: ProductQuery['priceLt'];
  sortBy: ProductQuery['sortBy'];
  order: ProductQuery['order'];
};

const initialState: InitialState = {
  type: FilterLotType.ALL,
  categoryId: undefined,
  priceGt: MINIMUM_SLIDER_PRICE,
  priceLt: MAXIMUM_SLIDER_PRICE,
  sortBy: SortBy.PRICE,
  order: Order.ASC,
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
    })
    .addCase(setOrder, (state, action) => {
      state.order = action.payload;
    });
});

export { reducer };
