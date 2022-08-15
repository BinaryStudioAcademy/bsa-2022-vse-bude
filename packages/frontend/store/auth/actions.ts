import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp } from 'services/auth';
import type { UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { auth, cookieStorage } from '@helpers';
import Router from 'next/router';
import { Routes } from '@enums';
import type { IAuth } from '../../common/types/auth';
import { AuthActions } from './action-types';

const loginUser = createAsyncThunk(
  AuthActions.LOGIN,
  (data: UserSignInDto, { rejectWithValue }) =>
    login(data)
      .then((data: IAuth) => {
        if (data?.error) {
          return rejectWithValue(data.error);
        }
        cookieStorage.saveTokens(data);
        auth.setTokens(data.accessToken, data.refreshToken);

        return data;
      })
      .catch((error) => {
        if (error instanceof Error) {
          return rejectWithValue(error.message);
        }
      }),
);

const signUpUser = createAsyncThunk(
  AuthActions.SIGN_UP,
  async (data: UserSignUpDto, { rejectWithValue }) => {
    try {
      const response: IAuth = await signUp(data);
      cookieStorage.saveTokens(response);
      auth.setTokens(response.accessToken, response.refreshToken);
      // TODO: upload user data
      // TODO: check if user's phone and email are verified and redirect dependently of it values
      await Router.push(Routes.PHONE_VERIFY);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export { loginUser, signUpUser };
