import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import type { ProductDto } from '@vse-bude/shared';
import {
  addProductToFavorites,
  deleteProductFromFavorites,
  getFavoriteIds,
  fetchFavouritesSSR,
} from './actions';

interface FavoriteProductState {
  favouritesList: ProductDto[];
  productsIds: string[];
  loading: boolean;
  error: string;
}

const initialState: FavoriteProductState = {
  favouritesList: [],
  productsIds: [],
  loading: false,
  error: null,
};

export const favoriteProductReducer = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: {
    [getFavoriteIds.fulfilled.type]: (state, { payload }) => {
      state.productsIds = payload;
    },
    [addProductToFavorites.fulfilled.type]: (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.productsIds = [...state.productsIds, payload];
    },
    [deleteProductFromFavorites.fulfilled.type]: (state, { payload }) => {
      if (!payload) {
        return;
      }
      const findIndex = state.productsIds.findIndex(
        (id: string) => id === payload,
      );
      if (findIndex === -1) {
        return;
      }
      const newIds = [
        ...state.productsIds.slice(0, findIndex),
        ...state.productsIds.slice(findIndex + 1),
      ];

      const favIdx = state.favouritesList.findIndex(
        (item) => item.id === payload,
      );

      state.productsIds = [...newIds];

      if (favIdx >= 0) {
        state.favouritesList = [
          ...state.favouritesList.slice(0, favIdx),
          ...state.favouritesList.slice(favIdx + 1),
        ];
      }
    },

    [fetchFavouritesSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFavouritesSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.favouritesList = payload;
    },
    [fetchFavouritesSSR.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.favouritesList = null;
      state.error = payload;
    },

    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.favoriteProduct.favouritesList) {
        state.favouritesList = payload.favoriteProduct.favouritesList;
      }

      if (payload.favoriteProduct.productsIds) {
        state.productsIds = payload.favoriteProduct.productsIds;
      }
    },
  },
});

export const favouritesReducer = favoriteProductReducer.reducer;

export type { FavoriteProductState };
