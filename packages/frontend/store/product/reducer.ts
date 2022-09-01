import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ProductDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchProducts, makeBid } from './actions';

interface ProductState {
  list: ProductDto[];
  loading: boolean;
}

const initialState: ProductState = {
  list: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending.type](state) {
      state.loading = true;
    },
    [fetchProducts.fulfilled.type](state, { payload }) {
      state.list = payload;
      state.loading = false;
    },
    [fetchProducts.rejected.type](state) {
      state.loading = false;
    },
    [HYDRATE](state, { payload }: HydrateAction) {
      state.list = payload.product.list;
    },
    [makeBid.fulfilled.type](state, { payload }) {
      console.log('pay');
      console.log(payload);
    },
  },
});

export const productReducer = productSlice.reducer;
export type { ProductState };
