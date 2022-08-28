import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import type { ProductType } from '@vse-bude/shared';
import {
  addToFavorites,
  getProducts,
  getProductsSSR,
  incrementProductViews,
} from 'services/product';
import { ProductActions } from './action-types';

interface RequestOptions {
  limit?: number;
  type?: ProductType;
}

interface RequestOptionsSSR extends RequestOptions {
  httpSSR: Http;
}

export const fetchProducts = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ limit, type }: RequestOptions) =>
    getProducts({
      limit,
      type,
    }),
);

export const fetchProductsSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ httpSSR, limit, type }: RequestOptionsSSR, { rejectWithValue }) =>
    getProductsSSR({ httpSSR, limit, type }).catch(() => rejectWithValue([])),
);

export const fetchIncrementProductViews = createAsyncThunk(
  ProductActions.FETCH_INCREMENT_PRODUCT_VIEWS,
  async (id: string) => incrementProductViews(id),
);

export const addProductToFavorites = createAsyncThunk(
  ProductActions.ADD_PRODUCT_TO_FAVORITES,
  async (productId: string, { rejectWithValue }) => {
    try {
      return await addToFavorites(productId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteProductFromFavorites = createAsyncThunk(
  ProductActions.DELETE_PRODUCT_FROM_FAVORITES,
  async (productId, { rejectWithValue }) => {
    try {
      return await deleteProductFromFavorites(productId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
