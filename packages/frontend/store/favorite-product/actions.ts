import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToast } from 'store/toast/actions';
import type { Http } from '@vse-bude/shared';
import {
  addToFavorites,
  deleteFromFavorites,
  fetchFavoriteProductsIds,
  getFavouritesSSR,
} from '@services';
import { FavoriteProductActions } from './action-types';

export const getFavoriteIds = createAsyncThunk(
  FavoriteProductActions.GET_FAVORITE_PRODUCT_IDS,
  async (_, { rejectWithValue }) => {
    try {
      return await fetchFavoriteProductsIds();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const addProductToFavorites = createAsyncThunk(
  FavoriteProductActions.ADD_PRODUCT_TO_FAVORITES,
  async (productId: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await addToFavorites(productId);
      dispatch(
        addToast({
          level: 'info',
          description: (t) => t('common:notifications.productAddedToFavorites'),
        }),
      );

      return result;
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

export const deleteProductFromFavorites = createAsyncThunk(
  FavoriteProductActions.DELETE_PRODUCT_FROM_FAVORITES,
  async (productId: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await deleteFromFavorites(productId);
      dispatch(
        addToast({
          level: 'info',
          description: (t) =>
            t('common:notifications.productRemovedFromFavorites'),
        }),
      );

      return result;
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

export const fetchFavouritesSSR = createAsyncThunk(
  FavoriteProductActions.FETCH_FAVOURITES,
  async (params: { http: Http }, { rejectWithValue, dispatch }) =>
    getFavouritesSSR(params).catch((e) => {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }),
);
