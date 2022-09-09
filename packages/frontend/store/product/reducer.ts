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
  fetchCurrentProduct,
  updateCurrentItemPrice,
} from './actions';

interface ProductState {
  list: ProductDto[];
  count: number;
  currentItem?: ItemDto;
  similarProducts: ProductDto[];
  loading: boolean;
  currentProduct: ProductDto;
  permissions: {
    isAbleToLeaveAuction: boolean;
  };
}

const initialState: ProductState = {
  list: [],
  count: null,
  similarProducts: [],
  loading: false,
  currentProduct: null,
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
    [updateCurrentItemPrice.type](state, { payload }) {
      state.currentItem.currentPrice = payload;
    },
    [makeBid.pending.type](state) {
      state.loading = true;
    },
    [makeBid.fulfilled.type](state, { payload }) {
      state.currentItem.currentPrice = payload.price;
      state.permissions.isAbleToLeaveAuction = true;
      state.loading = false;
    },
    [makeBid.rejected.type](state) {
      state.loading = false;
    },

    [auctionLeaveAction.fulfilled.type](state, { payload }) {
      state.currentItem.currentPrice = payload.price;
    },

    [fetchProducts.pending.type](state) {
      state.loading = true;
    },
    [fetchProducts.fulfilled.type](state, { payload }) {
      state.list = payload?.items;
      state.count = payload?.count;
      state.loading = false;
    },
    [fetchProducts.rejected.type](state) {
      state.loading = false;
    },
    [fetchCurrentProduct.pending.type](state) {
      state.loading = true;
    },
    [fetchCurrentProduct.fulfilled.type](state, { payload }) {
      state.currentProduct = payload;
      state.loading = false;
    },
    [fetchCurrentProduct.rejected.type](state) {
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
