import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUser,
  login,
  signUp,
  verifyPhone,
  resendPhoneCode,
  verifyEmail,
  resendEmailCode,
  resetPasswordLink,
  updatePassword as updatePasswordRequest,
} from 'services/auth';
import type {
  EmailVerifyDto,
  PhoneVerifyDto,
  ResetPasswordLink,
  UpdatePassword,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import Router from 'next/router';
import { auth } from '@helpers';
import { Routes } from '@enums';
import type { IAuth } from '@types';
import { AuthActions } from './action-types';

const getCurrentUser = createAsyncThunk(
  AuthActions.FETCH_USER,
  async (_request, { rejectWithValue }) => {
    try {
      return await getUser();
    } catch (e) {
      if (e instanceof HttpError) {
        if (e.status === HttpStatusCode.UNAUTHORIZED) {
          auth.logOut();
        }
      }

      return rejectWithValue(e.message);
    }
  },
);

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

const emailVerification = createAsyncThunk(
  AuthActions.EMAIL_VERIFY,
  async (data: EmailVerifyDto, { rejectWithValue }) => {
    try {
      await verifyEmail(data);
      await Router.push(Routes.DEFAULT);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const emailCodeResend = createAsyncThunk(
  AuthActions.EMAIL_RESEND_CODE,
  async (_, { rejectWithValue }) => {
    try {
      return await resendEmailCode();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const logoutUser = createAsyncThunk(
  AuthActions.LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      // await logout(); delete refresh token on server
      auth.logOut();
      await Router.push(Routes.DEFAULT);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const sendPasswordResetLink = createAsyncThunk(
  AuthActions.SEND_RESET_PASSWORD_LINK,
  async (data: ResetPasswordLink, { rejectWithValue }) => {
    try {
      return await resetPasswordLink(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const updatePassword = createAsyncThunk(
  AuthActions.UPDATE_PASSWORD,
  async (data: UpdatePassword, { rejectWithValue }) => {
    try {
      return await updatePasswordRequest(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export {
  loginUser,
  logoutUser,
  signUpUser,
  phoneVerification,
  phoneCodeResend,
  getCurrentUser,
  emailVerification,
  emailCodeResend,
  sendPasswordResetLink,
  updatePassword,
};
