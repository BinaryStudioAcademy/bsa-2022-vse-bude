import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { FullUserProfileDto, UserProfileDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchUserProfileSSR, fetchFullUserProfile } from './actions';

interface ProfileState {
  user: UserProfileDto | FullUserProfileDto | null;
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
    [fetchUserProfileSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserProfileSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [fetchUserProfileSSR.rejected.type]: (state) => {
      state.loading = false;
      state.user = null;
    },

    [fetchFullUserProfile.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFullUserProfile.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [fetchFullUserProfile.rejected.type]: (state) => {
      state.loading = false;
      state.user = null;
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
