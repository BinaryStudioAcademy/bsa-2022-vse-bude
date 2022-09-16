import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  AuctionPermissionsRequest,
  CreateBidRequest,
  Http,
  ProductIdRequest,
  ProductQuery,
} from '@vse-bude/shared';
import {
  getProductById,
  fetchAuctionPermissions,
  getProductByIdSSR,
  getProducts,
  incrementProductViews,
  leaveAuctionRequest,
  placeBidRequest,
  getSilimar,
  getProductEditByIdSSR,
  search,
} from 'services/product';
import { addToast } from 'store/toast/actions';
import { ProductActions } from './action-types';

export const fetchProducts = createAsyncThunk(
  ProductActions.FETCH_PRODUCTS,
  async (query: ProductQuery, { rejectWithValue, dispatch }) =>
    getProducts(query).catch((e) => {
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
  async (productId: string, { rejectWithValue, dispatch }) =>
    getSilimar(productId).catch((e) => {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );
      rejectWithValue(e.message);
    }),
);

export const fetchProductSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCT,
  (params: { id: string; http: Http }, { rejectWithValue }) =>
    getProductByIdSSR(params.http, params.id).catch(() => {
      rejectWithValue(null);
    }),
);

export const fetchEditProductSSR = createAsyncThunk(
  ProductActions.FETCH_PRODUCT,
  (params: { id: string; http: Http }, { rejectWithValue }) =>
    getProductEditByIdSSR(params.http, params.id).catch(() => {
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

export const updateCurrentItemPrice = createAction(
  ProductActions.UPDATE_CURRENT_ITEM_PRICE,
  (price: number) => ({
    payload: price,
  }),
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

export const actionSearch = createAsyncThunk(
  ProductActions.SEARCH,
  async (data: string, { rejectWithValue }) => {
    try {
      return await search(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const clearSearch = createAction<string>(ProductActions.CLEAR_SEARCH);
