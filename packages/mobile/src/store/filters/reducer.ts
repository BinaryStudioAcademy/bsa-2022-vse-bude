import { createReducer } from '@reduxjs/toolkit';
import { ProductQuery } from '@vse-bude/shared';
import {
  setLotType,
  setPriceRange,
  setSortBy,
  setCategory,
  setOrder,
  resetFilters,
} from './auction';

const initialState: ProductQuery = {
  type: undefined,
  categoryId: undefined,
  priceGt: undefined,
  priceLt: undefined,
  sortBy: undefined,
  order: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLotType, (state, action) => {
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
    })
    .addCase(resetFilters, () => {
      return { ...initialState };
    });
});

export { reducer };
