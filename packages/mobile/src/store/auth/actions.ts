import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserSignUpDto,
  UserSignInDto,
  UserDto,
  PhoneVerifyDto,
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

const logOut = createAsyncThunk<null, undefined, AsyncThunkConfig>(
  ActionType.LOG_OUT,
  async (_, { extra }) => {
    const { storage } = extra;
    storage.removeItem(StorageKey.ACCESS_TOKEN);
    storage.removeItem(StorageKey.REFRESH_TOKEN);

    return null;
  },
);

const sendCodeVerifyPhone = createAsyncThunk<null, undefined, AsyncThunkConfig>(
  ActionType.SEND_CODE,
  async (_, { extra, getState }) => {
    const { authApi } = extra;
    const userId = getState().auth.user?.id;

    if (userId) {
      await authApi.sendCodeVerifyPhone(userId);
    }

    return null;
  },
);

const verifyPhone = createAsyncThunk<boolean, PhoneVerifyDto, AsyncThunkConfig>(
  ActionType.VERIFY_PHONE,
  async (payload, { extra, getState }) => {
    const { authApi } = extra;
    const userId = getState().auth.user?.id;

    if (userId) {
      await authApi.verifyPhone(payload, userId);
    }

    return true;
  },
);

export { signUp, signIn, logOut, sendCodeVerifyPhone, verifyPhone };
