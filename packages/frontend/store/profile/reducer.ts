import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { UserDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
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
  reducers: {},
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
    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.profile.user) {
        state.user = payload.profile.user;
      }
    },
  },
});

export const profileReducer = profileSlice.reducer;
export type { ProfileState };
