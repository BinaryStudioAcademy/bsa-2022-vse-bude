import { createSlice } from '@reduxjs/toolkit';
import type { UserDto } from '@vse-bude/shared';
import { getCurrentUser } from './actions';

interface ProfileState {
  user: UserDto | null;
  loading: boolean;
}

const initialState: ProfileState = {
  user: null,
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [getCurrentUser.pending.type](state) {
      state.loading = true;
    },
    [getCurrentUser.fulfilled.type](state, { payload }) {
      state.user = payload;
      state.loading = false;
    },
    [getCurrentUser.rejected.type](state) {
      state.user = null;
      state.loading = false;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { logOut } = profileSlice.actions;
export type { ProfileState };
