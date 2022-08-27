import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http, ProductType } from '@vse-bude/shared';
import { getProducts, getProductsSSR } from 'services/product';
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
