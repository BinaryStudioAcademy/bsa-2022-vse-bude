import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchCategories } from './actions';

interface CategoryState {
  list: any[];
  loading: boolean;
}

const initialState: CategoryState = {
  list: [],
  loading: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.type](state) {
      state.loading = true;
    },
    [fetchCategories.fulfilled.type](state, { payload }) {
      state.list = payload;
      state.loading = false;
    },
    [fetchCategories.rejected.type](state) {
      state.loading = false;
    },
    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.category.list) {
        state.list = payload.category.list;
      }
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export type { CategoryState };