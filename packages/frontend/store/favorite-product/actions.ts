import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFavorites,
  deleteFromFavorites,
  fetchFavoriteProductsIds,
} from '../../services/product';
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
  async (productId: string, { rejectWithValue }) => {
    try {
      return await addToFavorites(productId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteProductFromFavorites = createAsyncThunk(
  FavoriteProductActions.DELETE_PRODUCT_FROM_FAVORITES,
  async (productId: string, { rejectWithValue }) => {
    try {
      return await deleteFromFavorites(productId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
