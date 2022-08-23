import { createReducer } from '@reduxjs/toolkit';
import type { UserDto } from '@vse-bude/shared';
import { combineReducers } from 'redux';
import { loginUser, signUpUser } from './actions';

export interface AuthState {
  currentUser: UserDto | null;
  error: string;
  loading: boolean;
}

const INITIAL_STATE: UserDto = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
};

const currentUser = createReducer(INITIAL_STATE, {
  // TODO: add user
  // [loginUser.fulfilled.type]: (_, { payload }) => payload.user,
});

const loading = createReducer(false, {
  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,
  [signUpUser.pending.type]: () => true,
  [signUpUser.fulfilled.type]: () => false,
  [signUpUser.rejected.type]: () => false,
});

const error = createReducer('', {
  [loginUser.rejected.type]: (_, { payload }) => payload,
  [signUpUser.rejected.type]: (_, { payload }) => payload,
  [loginUser.pending.type]: () => '',
});

export const authReducer = combineReducers({
  currentUser,
  error,
  loading,
});
