import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  loginUser,
  // registerUser,
  // getCurrentUser,
  // logoutUser,
} from './actions';

const INITIAL_STATE = {
  id: '',
  fullName: '',
  email: '',
  createdAt: '',
};

const user = createReducer(INITIAL_STATE, {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.user,
  // [registerUser.fulfilled]: (_, { payload }) => payload.user,
  // [getCurrentUser.fulfilled]: (_, { payload }) => payload,
  // [logoutUser]: () => INITIAL_STATE,
});

const token = createReducer('', {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.token,
  // [registerUser.fulfilled]: (_, { payload }) => payload.token,
  // [logoutUser]: () => null,
});

const isAuthenticated = createReducer(false, {
  [loginUser.rejected.type]: () => false,
  [loginUser.fulfilled.type]: () => true,
  // [registerUser.fulfilled]: () => true,
  // [getCurrentUser.fulfilled]: () => true,
  // [registerUser.rejected]: () => false,
  // [getCurrentUser.rejected]: () => false,
  // [logoutUser]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  isAuthenticated,
});
