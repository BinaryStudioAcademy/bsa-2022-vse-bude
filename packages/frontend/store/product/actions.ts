import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CreateBidRequest, Http, ProductType } from '@vse-bude/shared';
import {
  getProductById,
  getProducts,
  getProductsSSR,
  incrementProductViews,
  placeBidRequest,
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

export const fetchCurrentProduct = createAsyncThunk(
  ProductActions.GET_CURRENT_PRODUCT,
  async (id: string) => getProductById(id),
);

export const fetchIncrementProductViews = createAsyncThunk(
  ProductActions.FETCH_INCREMENT_PRODUCT_VIEWS,
  async (id: string) => incrementProductViews(id),
);

export const makeBid = createAsyncThunk(
  ProductActions.PLACE_BID,
  async (data: CreateBidRequest, { rejectWithValue }) => {
    try {
      return await placeBidRequest(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
