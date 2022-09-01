import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ItemDto, ProductDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import {
  auctionLeaveAction,
  auctionPermissions,
  fetchProductSSR,
  fetchProducts,
  makeBid,
  updateProductViews,
  fetchSimilarProducts,
} from './actions';

interface ProductState {
  list: ProductDto[];
  currentItem?: ItemDto;
  similarProducts: ProductDto[];
  loading: boolean;
  permissions: {
    isAbleToLeaveAuction: boolean;
  };
}

const initialState: ProductState = {
  list: [],
  similarProducts: [],
  loading: false,
  currentItem: null,
  permissions: {
    isAbleToLeaveAuction: false,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchProductSSR.fulfilled.type]: (state, { payload }) => {
      state.currentItem = payload;
      state.loading = false;
    },
    [updateProductViews.fulfilled.type]: (state) => {
      state.currentItem.views++;
    },

    [auctionPermissions.fulfilled.type]: (state, { payload }) => {
      state.permissions = {
        ...state.permissions,
        isAbleToLeaveAuction: payload.isAbleToLeaveAuction,
      };
    },
    [auctionPermissions.rejected.type]: (state) => {
      state.permissions = {
        ...state.permissions,
        isAbleToLeaveAuction: false,
      };
    },

    [makeBid.fulfilled.type](state, { payload }) {
      state.currentItem.currentPrice = payload.price;
    },
    [auctionLeaveAction.fulfilled.type](state, { payload }) {
      state.currentItem.currentPrice = payload.price;
    },

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

    [fetchSimilarProducts.fulfilled.type](state, { payload }) {
      state.similarProducts = payload;
    },

    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.product.list) {
        state.list = payload.product.list;
      }
      if (payload.product.currentItem) {
        state.currentItem = payload.product.currentItem;
      }
    },
  },
});

export const productReducer = productSlice.reducer;
export type { ProductState };
