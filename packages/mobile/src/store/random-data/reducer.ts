import { createReducer } from '@reduxjs/toolkit';
import { fetchRandomData } from './actions';

interface RandomDataState {
  data: any;
  loading: boolean;
}

const initialState: RandomDataState = {
  data: null,
  loading: false,
};

const randomDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRandomData.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchRandomData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
});

export { randomDataReducer };
export type { RandomDataState };
