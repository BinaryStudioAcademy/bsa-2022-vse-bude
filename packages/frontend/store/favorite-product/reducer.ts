import { createReducer } from '@reduxjs/toolkit';
import {
  addProductToFavorites,
  deleteProductFromFavorites,
  getFavoriteIds,
} from './actions';

export interface FavoriteProductState {
  productsIds: string[];
}

const initialListState: FavoriteProductState = {
  productsIds: [],
};

export const favoriteProductReducer = createReducer(initialListState, {
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
    state.productsIds = [...newIds];
  },
});
