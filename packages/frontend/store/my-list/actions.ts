import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http, ProductToArchive, ProductPost } from '@vse-bude/shared';
import {
  getMyListSSR,
  addProductToArchive,
  addProductToPosted,
  getFavouritesSSR,
} from '@services';
import { addToast } from 'store/toast/actions';
import { MyListActions } from './action-types';

export const fetchMyListSSR = createAsyncThunk(
  MyListActions.FETCH_MY_LIST,
  async (params: { http: Http }, { rejectWithValue, dispatch }) =>
    getMyListSSR(params).catch((e) => {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }),
);

export const addItemToArchive = createAsyncThunk(
  MyListActions.ADD_PRODUCT_TO_ARCHIVE,
  async ({ data }: { data: ProductToArchive }, { rejectWithValue, dispatch }) =>
    addProductToArchive({ data })
      .then((data) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.itemToArchive'),
          }),
        );

        return data;
      })
      .catch((e) => {
        dispatch(
          addToast({
            level: 'error',
            description: e.message,
          }),
        );

        return rejectWithValue(e.message);
      }),
);

export const addItemToPosted = createAsyncThunk(
  MyListActions.POST_PRODUCT,
  async ({ data }: { data: ProductPost }, { rejectWithValue, dispatch }) =>
    addProductToPosted({ data })
      .then((data) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.itemToPosted'),
          }),
        );

        return data;
      })
      .catch((e) => {
        dispatch(
          addToast({
            level: 'error',
            description: e.message,
          }),
        );

        return rejectWithValue(e.message);
      }),
);

export const fetchFavouritesSSR = createAsyncThunk(
  MyListActions.FETCH_FAVOURITES,
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
