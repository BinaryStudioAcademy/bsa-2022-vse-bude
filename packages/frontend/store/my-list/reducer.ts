import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ProductDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchMyListSSR } from './actions';

interface MyListState {
  itemsList: ProductDto[];
  loading: boolean;
  error: string;
}

const initialState: MyListState = {
  itemsList: null,
  loading: false,
  error: null,
};

const myListSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMyListSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMyListSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.itemsList = payload;
    },
    [fetchMyListSSR.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.itemsList = null;
      state.error = payload;
    },

    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.myList.itemsList) {
        state.itemsList = payload.myList.itemsList;
      }
    },
  },
});

export const myListReducer = myListSlice.reducer;

export type { MyListState };
