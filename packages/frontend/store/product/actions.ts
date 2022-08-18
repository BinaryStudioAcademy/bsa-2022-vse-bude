import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { getProducts, getProductsSSR } from 'services/product';
import { ProductActions } from './action-types';

interface Params {
  limit?: number;
}

interface ParamsSSR extends Params {
  httpSSR: Http;
}

export const fetchProducts = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ limit }: Params) => getProducts(limit),
);

export const fetchAuctionProducts = createAsyncThunk(
  ProductActions.FETCH_AUCTION_PRODUCTS,
  async ({ limit }: Params) => getProducts(limit, ProductType.AUCTION),
);

export const fetchSellingProducts = createAsyncThunk(
  ProductActions.FETCH_SELLING_PRODUCTS,
  async ({ limit }: Params) => getProducts(limit, ProductType.SELLING),
);

export const fetchProductsSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async ({ httpSSR, limit }: ParamsSSR, { rejectWithValue }) =>
    getProductsSSR(httpSSR, limit).catch(() => rejectWithValue([])),
);

export const fetchAuctionProductsSSR = createAsyncThunk(
  ProductActions.FETCH_AUCTION_PRODUCTS,
  async ({ httpSSR, limit }: ParamsSSR, { rejectWithValue }) =>
    getProductsSSR(httpSSR, limit, ProductType.AUCTION).catch(() =>
      rejectWithValue([]),
    ),
);

export const fetchSellingProductsSSR = createAsyncThunk(
  ProductActions.FETCH_SELLING_PRODUCTS,
  async ({ httpSSR, limit }: ParamsSSR, { rejectWithValue }) =>
    getProductsSSR(httpSSR, limit, ProductType.SELLING).catch(() =>
      rejectWithValue([]),
    ),
);
