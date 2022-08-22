import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp, verifyPhone, resendPhoneCode } from 'services/auth';
import type {
  PhoneVerifyDto,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { auth } from '@helpers';
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
        auth.setTokens(data.accessToken, data.refreshToken);
        Router.push(Routes.DEFAULT);

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
      auth.setTokens(response.accessToken, response.refreshToken);
      // TODO: upload user data
      // TODO: check if user's phone and email are verified and redirect dependently of it values
      await Router.push(Routes.PHONE_VERIFY);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const phoneVerification = createAsyncThunk(
  AuthActions.PHONE_VERIFY,
  async (data: PhoneVerifyDto, { rejectWithValue }) => {
    try {
      await verifyPhone(data);
      await Router.push(Routes.EMAIL_VERIFY);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const phoneCodeResend = createAsyncThunk(
  AuthActions.PHONE_RESEND_CODE,
  async (_, { rejectWithValue }) => {
    try {
      return await resendPhoneCode();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export { loginUser, signUpUser, phoneVerification, phoneCodeResend };
