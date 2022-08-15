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

const loading = createReducer(false, {
  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,
});

const error = createReducer('', {
  [loginUser.rejected.type]: (_, { payload }) => payload,
  [loginUser.pending.type]: () => '',
});

export const authReducer = combineReducers({
  user,
  error,
  loading,
});
