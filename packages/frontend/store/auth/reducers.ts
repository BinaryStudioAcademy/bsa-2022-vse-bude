import { createReducer } from '@reduxjs/toolkit';
import type { UserDto } from '@vse-bude/shared';
import { combineReducers } from 'redux';
import { loginUser } from './actions';

const INITIAL_STATE: UserDto = {
  id: null,
  name: null,
  email: null,
};

const user = createReducer(INITIAL_STATE, {
  // TODO: add user
  // [loginUser.fulfilled.type]: (_, { payload }) => payload.user,
});

const token = createReducer('', {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.accessToken,
  [loginUser.rejected.type]: () => '',
});

const refreshToken = createReducer('', {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.refreshToken,
  [loginUser.rejected.type]: () => '',
});

const loading = createReducer(false, {
  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,
});

const error = createReducer('', {
  [loginUser.pending.type]: () => '',
  [loginUser.rejected.type]: (_, { payload }) => payload,
});

export const authReducer = combineReducers({
  user,
  token,
  refreshToken,
  error,
  loading,
});
