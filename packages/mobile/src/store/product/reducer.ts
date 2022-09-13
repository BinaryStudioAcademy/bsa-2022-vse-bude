import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import { loadProductInfo, updateProductViews } from './actions';

type InitialState = {
  product: ProductDto | null;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  product: null,
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
    })
    .addCase(updateProductViews.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(updateProductViews.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addCase(updateProductViews.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.product ? (state.product.views = action.payload.views) : undefined;
    });
});

export { reducer };
