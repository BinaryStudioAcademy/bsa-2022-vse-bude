import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import {
  fetchAuctionProducts,
  fetchProducts,
  fetchSellingProducts,
} from './actions';

interface ProductState {
  allProducts: any[];
  auctionProducts: any[];
  sellingProducts: any[];
  loading: boolean;
}

const initialState: ProductState = {
  allProducts: [],
  auctionProducts: [],
  sellingProducts: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending.type](state) {
      state.loading = true;
    },
    [fetchProducts.fulfilled.type](state, { payload }) {
      state.allProducts = payload;
      state.loading = false;
    },
    [fetchProducts.rejected.type](state) {
      state.loading = false;
    },
    [fetchAuctionProducts.pending.type](state) {
      state.loading = true;
    },
    [fetchAuctionProducts.fulfilled.type](state, { payload }) {
      state.auctionProducts = payload;
      state.loading = false;
    },
    [fetchAuctionProducts.rejected.type](state) {
      state.loading = false;
    },
    [fetchSellingProducts.pending.type](state) {
      state.loading = true;
    },
    [fetchSellingProducts.fulfilled.type](state, { payload }) {
      state.sellingProducts = payload;
      state.loading = false;
    },
    [fetchSellingProducts.rejected.type](state) {
      state.loading = false;
    },
    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.product.allProducts) {
        state.allProducts = payload.product.allProducts;
      }
      if (payload.product.auctionProducts) {
        state.auctionProducts = payload.product.auctionProducts;
      }
      if (payload.product.allProducts) {
        state.sellingProducts = payload.product.sellingProducts;
      }
    },
  },
});

export const productReducer = productSlice.reducer;
export type { ProductState };
