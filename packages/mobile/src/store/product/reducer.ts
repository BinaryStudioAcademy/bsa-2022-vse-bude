import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import { loadProductInfo } from './actions';

type InitialState = {
  product: ProductDto | undefined;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  product: undefined,
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProductInfo.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(loadProductInfo.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(loadProductInfo.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.product = action.payload;
    });
});

export { reducer };
