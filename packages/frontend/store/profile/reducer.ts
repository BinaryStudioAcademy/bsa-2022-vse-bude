import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { FullUserProfileDto, UserProfileDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { phoneVerification } from '../auth';
import {
  fetchUserProfileSSR,
  fetchFullUserProfile,
  updateUserProfile,
  updateUserAvatar,
} from './actions';

interface ProfileState {
  user: UserProfileDto | FullUserProfileDto | null;
  isEditing: boolean;
  loading: boolean;
  saveLoader: boolean;
  error: string;
}

const initialState: ProfileState = {
  user: null,
  isEditing: false,
  loading: false,
  saveLoader: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    resetIsEditing: (state) => {
      state.isEditing = false;
    },
  },
  extraReducers: {
    [fetchUserProfileSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserProfileSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [fetchUserProfileSSR.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    },

    [fetchFullUserProfile.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFullUserProfile.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },

    [fetchFullUserProfile.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    },

    [updateUserProfile.fulfilled.type]: (state, { payload }) => {
      state.saveLoader = false;
      state.user = payload;
    },

    [phoneVerification.fulfilled.type]: (state) => {
      state.user = {
        ...state.user,
        phoneVerified: true,
      };
    },

    [updateUserProfile.pending.type]: (state) => {
      state.saveLoader = true;
    },

    [updateUserProfile.rejected.type]: (state, { payload }) => {
      state.saveLoader = false;
      state.error = payload;
    },

    [updateUserAvatar.pending.type]: (state, { _payload }) => {
      state.user.avatar = null;
    },
    [updateUserAvatar.fulfilled.type]: (state, { payload }) => {
      state.user.avatar = payload.avatar;
      state.loading = false;
    },
    [updateUserAvatar.rejected.type]: (state, { _payload }) => {
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

export const { setIsEditing, resetIsEditing } = profileSlice.actions;

export type { ProfileState };
