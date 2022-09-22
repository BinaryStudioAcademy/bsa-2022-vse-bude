import { createReducer } from '@reduxjs/toolkit';
import { Order, ProductQuery, SortBy } from '@vse-bude/shared';
import { update, reset } from './action';

const initialState: ProductQuery = {
  sortBy: SortBy.DATE,
  order: Order.DESC,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(update, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(reset, () => {
      return initialState;
    });
});

export { reducer };
