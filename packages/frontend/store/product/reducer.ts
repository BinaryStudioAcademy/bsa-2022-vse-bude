import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ProductDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import {
  addProductToFavorites,
  deleteProductFromFavorites,
  fetchProducts,
  getFavoriteIds,
} from './actions';

interface ProductState {
  list: ProductDto[];
  loading: boolean;
  favoriteProducts: string[];
}

const initialState: ProductState = {
  list: [],
  loading: false,
  favoriteProducts: [],
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
      if (payload.product.list) {
        state.list = payload.product.list;
      }
    },
    [getFavoriteIds.fulfilled.type](state, { payload }) {
      state.favoriteProducts = payload;
    },
    [addProductToFavorites.fulfilled.type](state, { payload }) {
      if (!payload) {
        return;
      }
      state.favoriteProducts = [...state.favoriteProducts, payload];
    },
    [deleteProductFromFavorites.fulfilled.type](state, { payload }) {
      if (!payload) {
        return;
      }
      const findIndex = state.favoriteProducts.findIndex(
        (id: string) => id === payload,
      );
      if (findIndex === -1) {
        return;
      }
      const newIds = [
        ...state.favoriteProducts.slice(0, findIndex),
        ...state.favoriteProducts.slice(findIndex + 1),
      ];
      state.favoriteProducts = [...newIds];
    },
  },
});

export const productReducer = productSlice.reducer;
export type { ProductState };
