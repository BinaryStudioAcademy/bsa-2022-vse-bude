import { createSlice } from '@reduxjs/toolkit';
import type {
  UserDto,
  UserAddressDto,
  UserSocialMediaDto,
} from '@vse-bude/shared';
import { getCurrentUser } from './actions';

interface ProfileState {
  user: UserDto | null;
  address: UserAddressDto | null;
  socialMedia: UserSocialMediaDto | null;
  loading: boolean;
}

const initialState: ProfileState = {
  user: {
    id: '1234567890',
    avatar: null,
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@yahoo.com',
    phone: '+380660153647',
  },
  address: null,
  socialMedia: null,
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
