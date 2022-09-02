import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import { loadAllProducts } from './actions';

type InitialState = {
  products: ProductDto[] | null;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  products: null,
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllProducts.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadAllProducts.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadAllProducts.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.products = action.payload;
    });
});

export { reducer };
