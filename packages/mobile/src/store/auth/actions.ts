import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserSignUpDto,
  UserSignInDto,
  UserDto,
  ResetPasswordLink,
  ResetPasswordResponse,
} from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { AsyncThunkConfig } from '~/common/types/types';
import { notification } from '~/services/services';
import { t } from 'i18next';
import { ActionType } from './common';

const signUp = createAsyncThunk<UserDto, UserSignUpDto, AsyncThunkConfig>(
  ActionType.SIGN_UP,
  async (payload, { extra }) => {
    const { authApi, storage } = extra;
    const response = await authApi.signUp(payload);

    storage.setItem(StorageKey.ACCESS_TOKEN, response.accessToken);
    storage.setItem(StorageKey.REFRESH_TOKEN, response.refreshToken);

    return response.user;
  },
);

const signIn = createAsyncThunk<UserDto, UserSignInDto, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (payload, { extra }) => {
    const { authApi, storage } = extra;
    const response = await authApi.signIn(payload);

    storage.setItem(StorageKey.ACCESS_TOKEN, response.accessToken);
    storage.setItem(StorageKey.REFRESH_TOKEN, response.refreshToken);

    return response.user;
  },
);

const getCurrentUser = createAsyncThunk<UserDto, undefined, AsyncThunkConfig>(
  ActionType.CURRENT_USER,
  async (_, { extra }) => {
    const { authApi } = extra;

    const response = await authApi.getCurrentUser();

    return response;
  },
);

const logOut = createAsyncThunk<null, undefined, AsyncThunkConfig>(
  ActionType.LOG_OUT,
  async (_, { extra }) => {
    const { storage } = extra;
    storage.removeItem(StorageKey.ACCESS_TOKEN);
    storage.removeItem(StorageKey.REFRESH_TOKEN);

    return null;
  },
);

const resetPassword = createAsyncThunk<
  ResetPasswordResponse,
  ResetPasswordLink,
  AsyncThunkConfig
>(ActionType.UPDATE_PASSWORD, async (payload, { extra }) => {
  const { authApi } = extra;
  const response = await authApi.resetPassword(payload);
  if (response.success) {
    notification.success(t('screens:verification.RESET_PASSWORD_SUCCESS'));
  }

  return response;
});

export { signUp, signIn, getCurrentUser, logOut, resetPassword };
