import { createReducer } from '@reduxjs/toolkit';
import { AllProductsDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { loadProducts } from './actions';

type InitialState = {
  products: AllProductsDto;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  products: { items: [], count: 0 },
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadProducts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products = { ...state.products, ...action.payload };
    });
});

export { reducer };
