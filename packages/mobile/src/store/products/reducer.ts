import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import { loadAllProducts } from './actions';

type InitialState = {
  products: ProductDto[] | [];
  productsLoadStatus: DataStatus;
};

const initialState: InitialState = {
  products: [],
  productsLoadStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllProducts.pending, (state) => {
      state.productsLoadStatus = DataStatus.PENDING;
    })
    .addCase(loadAllProducts.rejected, (state) => {
      state.productsLoadStatus = DataStatus.REJECTED;
    })
    .addCase(loadAllProducts.fulfilled, (state, action) => {
      state.productsLoadStatus = DataStatus.FULFILLED;
      state.products = action.payload;
    });
});

export { reducer };
