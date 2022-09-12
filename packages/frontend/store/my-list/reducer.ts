import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { ProductDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchMyListSSR } from './actions';

interface MyListState {
  itemsList: ProductDto[] | null;
  filterType: null | string;
  filterStatus: {
    all: boolean;
    purchased: boolean;
    sold: boolean;
    posted: boolean;
    draft: boolean;
    archived: boolean;
  };
  loading: boolean;
  error: string;
}

const initialState: MyListState = {
  itemsList: null,
  filterType: null,
  filterStatus: {
    all: true,
    purchased: false,
    sold: false,
    posted: false,
    draft: false,
    archived: false,
  },
  loading: false,
  error: null,
};

const myListSlice = createSlice({
  name: 'mylist',
  initialState,
  reducers: {
    filterByType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
    },
    filterByStatus: (state, action: PayloadAction<string>) => {
      for (const key in state.filterStatus) {
        if (key !== action.payload) {
          state.filterStatus[key] = false;
        }
      }
      state.filterStatus[action.payload] = !state.filterStatus[action.payload];
    },
    resetStatuses: (state) => {
      for (const key in state.filterStatus) {
        if (key !== 'all') {
          state.filterStatus[key] = false;
        }
      }
      state.filterStatus.all = true;
    },
  },
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

export const { filterByType, filterByStatus, resetStatuses } =
  myListSlice.actions;

export type { MyListState };
