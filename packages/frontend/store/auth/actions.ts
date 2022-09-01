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
import { addToast } from 'store/toast/actions';
import { hideVerifyModal, showVerifyModal } from '../verify/actions';
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
  (data: UserSignInDto, { rejectWithValue, dispatch }) =>
    login(data)
      .then(async (data: IAuth) => {
        if (data?.error) {
          dispatch(
            addToast({
              level: 'error',
              description: data.error,
            }),
          );

          return rejectWithValue(data.error);
        }
        auth.setTokens(data.accessToken, data.refreshToken);
        Router.push(Routes.DEFAULT);
        await dispatch(getCurrentUser);

        if (!data.user.phoneVerified) {
          dispatch(showVerifyModal());
        }

        return data;
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(
            addToast({
              level: 'error',
              description: error.message,
            }),
          );

          return rejectWithValue(error.message);
        }
      }),
);

const signUpUser = createAsyncThunk(
  AuthActions.SIGN_UP,
  async (data: UserSignUpDto, { rejectWithValue, dispatch }) => {
    try {
      const response: IAuth = await signUp(data);
      auth.setTokens(response.accessToken, response.refreshToken);

      await Router.push(Routes.PHONE_VERIFY);
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

const phoneVerification = createAsyncThunk(
  AuthActions.PHONE_VERIFY,
  async (data: PhoneVerifyDto, { rejectWithValue, dispatch }) => {
    try {
      await verifyPhone(data);
      dispatch(hideVerifyModal());
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

const phoneCodeResend = createAsyncThunk(
  AuthActions.PHONE_RESEND_CODE,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      return await resendPhoneCode();
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

const emailVerification = createAsyncThunk(
  AuthActions.EMAIL_VERIFY,
  async (data: EmailVerifyDto, { rejectWithValue, dispatch }) => {
    try {
      await verifyEmail(data);
      await Router.push(Routes.DEFAULT);
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

const emailCodeResend = createAsyncThunk(
  AuthActions.EMAIL_RESEND_CODE,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      return await resendEmailCode();
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

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
      // TODO: clear all store
      await Router.push(Routes.DEFAULT);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const sendPasswordResetLink = createAsyncThunk(
  AuthActions.SEND_RESET_PASSWORD_LINK,
  async (data: ResetPasswordLink, { rejectWithValue, dispatch }) => {
    try {
      return await resetPasswordLink(data);
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);

const updatePassword = createAsyncThunk(
  AuthActions.UPDATE_PASSWORD,
  async (data: UpdatePassword, { rejectWithValue, dispatch }) => {
    try {
      return await updatePasswordRequest(data);
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

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
