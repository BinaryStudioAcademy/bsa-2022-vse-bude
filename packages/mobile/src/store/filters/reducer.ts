import { createReducer } from '@reduxjs/toolkit';
import { Order, ProductQuery, SortBy } from '@vse-bude/shared';
import {
  setLotType,
  setPriceRange,
  setSortBy,
  setCategory,
  setOrder,
  update,
  reset,
} from './action';

const initialState: ProductQuery = {
  sortBy: SortBy.DATE,
  order: Order.DESC,
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
    .addCase(update, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(reset, () => {
      return initialState;
    });
});

export { reducer };
