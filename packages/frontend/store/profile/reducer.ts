import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type { UserAddressDto, UserProfileDto } from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { updateUserAvatar, fetchUserProfileSSR } from './actions';

interface ProfileState {
  user: UserProfileDto | null;
  address: UserAddressDto | null;
  loading: boolean;
}

const initialState: ProfileState = {
  user: null,
  address: null,
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
    [updateUserAvatar.pending.type]: (state, { _payload }) => {
      state.loading = true;
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

export type { ProfileState };
