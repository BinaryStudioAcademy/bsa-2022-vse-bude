import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { ProductDto } from '@vse-bude/shared';
import { removeIdDuplicates } from '~/helpers/helpers';
import { loadProducts } from './actions';

type InitialState = {
  products: ProductDto[] | [];
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  products: [],
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
      state.products =
        state.products.length > 0
          ? removeIdDuplicates<ProductDto>(state.products, action.payload)
          : action.payload;
    });
});

export { reducer };
