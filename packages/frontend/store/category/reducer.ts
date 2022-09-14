import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { CategoryResponseDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchCategories } from './actions';

interface CategoryState {
  list: CategoryResponseDto[];
  listInUse: CategoryResponseDto[];
  loading: boolean;
}

const initialState: CategoryState = {
  list: [],
  listInUse: [],
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
      state.listInUse = payload.filter((item) => item.productsCount > 0);
      state.loading = false;
    },
    [fetchCategories.rejected.type](state) {
      state.loading = false;
    },
    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.category.list.length) {
        state.list = payload.category.list;
        state.listInUse = payload.category.listInUse;
      }
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export type { CategoryState };
