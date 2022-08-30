import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { FullUserProfileDto, UserProfileDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchUserProfileSSR, fetchFullUserProfileSSR } from './actions';

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
    [fetchUserProfileSSR.fulfilled.type]: (state, { payload }) => {
      state.user = payload;
    },
    [fetchFullUserProfileSSR.fulfilled.type]: (state, { payload }) => {
      state.user = payload;
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
