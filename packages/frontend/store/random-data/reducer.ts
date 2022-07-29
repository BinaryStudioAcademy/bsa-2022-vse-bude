import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from 'common/types';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchRandomData } from './actions';

interface RandomDataState {
  data: any;
  loading: boolean;
}

const initialState: RandomDataState = {
  data: null,
  loading: false,
};

const randomDataSlice = createSlice({
  name: 'randomData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRandomData.pending.type](state) {
      state.loading = true;
    },
    [fetchRandomData.fulfilled.type](state, { payload }) {
      state.data = payload;
      state.loading = false;
    },
    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.randomData.data) {
        state.data = payload.randomData;
      }
    },
  },
});

export const randomDataReducer = randomDataSlice.reducer;
export type { RandomDataState };
