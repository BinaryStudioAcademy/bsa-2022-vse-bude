import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getProducts, getProductsSSR } from 'services/product';
import { ProductActions } from './action-types';

interface Params {
  limit?: number;
  type?: string;
}

interface ParamsSSR extends Params {
  httpSSR: Http;
}

export const fetchProducts = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ limit, type }: Params) => getProducts(limit, type),
);

export const fetchProductsSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ httpSSR, limit, type }: ParamsSSR, { rejectWithValue }) =>
    getProductsSSR(httpSSR, limit, type).catch(() => rejectWithValue([])),
);
