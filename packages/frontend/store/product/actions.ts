import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  AuctionPermissionsRequest,
  CreateBidRequest,
  Http,
  ProductIdRequest,
} from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import {
  getProductById,
  fetchAuctionPermissions,
  getProductByIdSSR,
  getProducts,
  incrementProductViews,
  leaveAuctionRequest,
  placeBidRequest,
} from 'services/product';
import { addToast } from 'store/toast/actions';
import { ProductActions } from './action-types';

interface RequestOptions {
  limit?: number;
  type?: ProductType;
}

// interface RequestOptionsSSR extends RequestOptions {
//   httpSSR: Http;
// }

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

export const fetchSimilarProducts = createAsyncThunk(
  ProductActions.FETCH_SIMILAR_PRODUCTS,
  async (id: string, { rejectWithValue, dispatch }) =>
    getProducts({
      limit: 4,
      type: ProductType.AUCTION,
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

// export const fetchProductsSSR = createAsyncThunk(
//   ProductActions.FETCH_PRODUCTS,
//   async ({ httpSSR, limit, type }: RequestOptionsSSR, { rejectWithValue }) =>
//     getProductsSSR({ httpSSR, limit, type }).catch(() => rejectWithValue([])),
// );

export const fetchProductSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCT,
  (params: { id: string; http: Http }, { rejectWithValue }) =>
    getProductByIdSSR(params.http, params.id).catch(() => {
      rejectWithValue(null);
    }),
);

export const fetchCurrentProduct = createAsyncThunk(
  ProductActions.GET_CURRENT_PRODUCT,
  async (id: string) => getProductById(id),
);

export const updateProductViews = createAsyncThunk(
  ProductActions.INCREMENT_PRODUCT_VIEWS,
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

export const auctionPermissions = createAsyncThunk(
  ProductActions.AUCTION_PERMISSIONS,
  async (data: AuctionPermissionsRequest, { rejectWithValue }) => {
    try {
      return await fetchAuctionPermissions(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const auctionLeaveAction = createAsyncThunk(
  ProductActions.AUCTION_LEAVE,
  async (data: ProductIdRequest, { rejectWithValue, dispatch }) => {
    try {
      const result = await leaveAuctionRequest(data);
      dispatch(
        addToast({
          level: 'info',
          description: (t) => t('common:notifications.leftAuction'),
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
