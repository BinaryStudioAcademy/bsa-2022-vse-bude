import { createReducer } from '@reduxjs/toolkit';
import type { UserDto } from '@vse-bude/shared';
import { combineReducers } from 'redux';
import { fetchUpdateUserAvatar } from 'store/profile/actions';
import {
  getCurrentUser,
  emailVerification,
  loginUser,
  phoneVerification,
  signUpUser,
} from './actions';

export interface AuthState {
  user: UserDto | null;
  error: string;
  loading: boolean;
}

const user = createReducer<UserDto>(null, {
  [getCurrentUser.fulfilled.type]: (_, { payload }) => payload,
  [getCurrentUser.rejected.type]: () => null,
  [phoneVerification.fulfilled.type]: (state) => {
    state.phoneVerified = true;
  },
  [fetchUpdateUserAvatar.fulfilled.type]: (state, { payload }) => {
    state.avatar = payload.avatar;
  },
  [fetchUpdateUserAvatar.pending.type]: (state, { _payload }) => {
    state.avatar = null;
  },
});

const loading = createReducer(false, {
  [getCurrentUser.pending.type]: () => true,
  [getCurrentUser.rejected.type]: () => false,
  [getCurrentUser.fulfilled.type]: () => false,

  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,

  [fetchUpdateUserAvatar.pending.type]: () => true,
  [fetchUpdateUserAvatar.fulfilled.type]: () => false,
  [fetchUpdateUserAvatar.rejected.type]: () => false,

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
});

export const authReducer = combineReducers({
  user,
  error,
  loading,
});
