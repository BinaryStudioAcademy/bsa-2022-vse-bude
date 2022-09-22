import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http, ProductToArchive, ProductPost } from '@vse-bude/shared';
import {
  getMyListSSR,
  addProductToArchive,
  addProductToPosted,
  deleteProduct,
} from '@services';
import { addToast } from 'store/toast/actions';
import { MyListActions } from './action-types';

export const fetchMyListSSR = createAsyncThunk(
  MyListActions.FETCH_MY_LIST,
  async (params: { http: Http }, { rejectWithValue, dispatch }) =>
    getMyListSSR(params)
      .then((res) => res)
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

export const addItemToArchive = createAsyncThunk(
  MyListActions.ADD_PRODUCT_TO_ARCHIVE,
  async ({ data }: { data: ProductToArchive }, { rejectWithValue, dispatch }) =>
    addProductToArchive({ data })
      .then((res) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.itemToArchive'),
          }),
        );

        return res;
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
      .then((res) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.itemToPosted'),
          }),
        );

        return res;
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

export const deleteItem = createAsyncThunk(
  MyListActions.DELETE_PRODUCT,
  async ({ productId }: { productId: string }, { rejectWithValue, dispatch }) =>
    deleteProduct({ productId })
      .then((data) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.itemDeleted'),
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
