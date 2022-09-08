import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getMyListSSR } from '@services';
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
