import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CreateBidRequest, Http, ProductType } from '@vse-bude/shared';
import {
  getProducts,
  getProductsSSR,
  incrementProductViews,
  placeBidRequest,
} from 'services/product';
import { addToast } from 'store/toast/actions';
import { auctionPermissions } from '../product-auction';
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
  async ({ limit, type }: RequestOptions, { rejectWithValue, dispatch }) =>
    getProducts({
      limit,
      type,
    }).catch((e) => {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );
      rejectWithValue(e.message);
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

export const makeBid = createAsyncThunk(
  ProductActions.PLACE_BID,
  async (data: CreateBidRequest, { rejectWithValue, dispatch }) => {
    try {
      const result = await placeBidRequest(data);
      dispatch(
        addToast({
          level: 'success',
          description: (t) => t('common:notifications.bidPlaced'),
        }),
      );
      dispatch(
        auctionPermissions({
          productId: data.productId,
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
