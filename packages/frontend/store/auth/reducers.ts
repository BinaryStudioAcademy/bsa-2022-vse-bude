import { createReducer } from '@reduxjs/toolkit';
import type { UserDto } from '@vse-bude/shared';
import { combineReducers } from 'redux';
import { updateUserAvatar, updateUserProfile } from 'store/profile/actions';
import {
  getCurrentUser,
  emailVerification,
  loginUser,
  logoutUser,
  phoneVerification,
  signUpUser,
  clearAuthError,
} from './actions';

export interface AuthState {
  user: UserDto | null;
  error: string;
  loading: boolean;
}

const user = createReducer<UserDto>(null, {
  [getCurrentUser.fulfilled.type]: (_, { payload }) => payload,
  [getCurrentUser.rejected.type]: () => null,
  [logoutUser.fulfilled.type]: () => null,
  [phoneVerification.fulfilled.type]: (state) => {
    state.phoneVerified = true;
  },
  [emailVerification.fulfilled.type]: (state) => {
    state.emailVerified = true;
  },
  [updateUserAvatar.fulfilled.type]: (state, { payload }) => {
    state.avatar = payload.avatar;
  },
  [updateUserProfile.fulfilled.type]: (state, { payload }) => {
    state.lastName = payload.lastName;
    state.firstName = payload.firstName;
  },
  [updateUserAvatar.pending.type]: (state, { _payload }) => {
    state.avatar = null;
  },
  [updateUserProfile.fulfilled.type]: (state, { payload }) => {
    state.lastName = payload.lastName;
    state.firstName = payload.firstName;
    state.phone = payload.phone;
    state.email = payload.email;
    state.phoneVerified = payload.phoneVerified;
    state.emailVerified = payload.emailVerified;
  },
});

const loading = createReducer(false, {
  [getCurrentUser.pending.type]: () => true,
  [getCurrentUser.rejected.type]: () => false,
  [getCurrentUser.fulfilled.type]: () => false,

  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,

  [updateUserAvatar.pending.type]: () => true,
  [updateUserAvatar.fulfilled.type]: () => false,
  [updateUserAvatar.rejected.type]: () => false,

  [signUpUser.pending.type]: () => true,
  [signUpUser.fulfilled.type]: () => false,
  [signUpUser.rejected.type]: () => false,
});

const error = createReducer('', {
  [loginUser.pending.type]: () => '',
  [loginUser.rejected.type]: (_, { payload }) => payload,
  [signUpUser.rejected.type]: (_, { payload }) => payload,
  [phoneVerification.rejected.type]: (_, { payload }) => payload,
  [emailVerification.rejected.type]: (_, { payload }) => payload,
  [loginUser.pending.type]: () => '',
  [clearAuthError.type]: () => '',
});

export const authReducer = combineReducers({
  user,
  error,
  loading,
});
