import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserSignUpDto,
  UserSignInDto,
  UserDto,
  ResetPasswordLink,
} from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { AsyncThunkConfig } from '~/common/types/types';
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

const resetPassword = createAsyncThunk<
  unknown,
  ResetPasswordLink,
  AsyncThunkConfig
>(ActionType.UPDATE_PASSWORD, async (payload, { extra }) => {
  const { authApi } = extra;
  const response = await authApi.resetPassword(payload);

  return response;
});

export { signUp, signIn, resetPassword };
