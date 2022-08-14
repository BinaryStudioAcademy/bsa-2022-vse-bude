import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loginUser } from './actions';

const INITIAL_STATE = {
  id: '',
  fullName: '',
  email: '',
  createdAt: '',
};

const user = createReducer(INITIAL_STATE, {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.user,
});

const token = createReducer('', {
  [loginUser.fulfilled.type]: (_, { payload }) => payload.token,
});

const isAuthenticated = createReducer(false, {
  [loginUser.rejected.type]: () => false,
  [loginUser.fulfilled.type]: () => true,
});

export const authReducer = combineReducers({
  user,
  token,
  isAuthenticated,
});
