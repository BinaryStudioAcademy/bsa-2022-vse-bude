import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { CategoryDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchCategories } from './actions';

interface CategoryState {
  list: CategoryDto[];
  loading: boolean;
}

const initialState: CategoryState = {
  list: null,
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
