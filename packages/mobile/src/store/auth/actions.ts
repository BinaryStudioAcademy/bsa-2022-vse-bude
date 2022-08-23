import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserDto, UserSignUpDto, UserSignInDto } from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const signUp = createAsyncThunk<UserDto, UserSignUpDto, AsyncThunkConfig>(
  ActionType.SIGN_UP,
  async (payload, { extra }) => {
    const { authApi } = extra;

    return authApi.signUp(payload);
  },
);

const signIn = createAsyncThunk<UserDto, UserSignInDto, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (payload, { extra }) => {
    const { authApi, storage } = extra;
    const response = await authApi.signIn(payload);

    storage.setItem(StorageKey.ACCESS_TOKEN, response.accessToken);
    storage.setItem(StorageKey.REFRESH_TOKEN, response.refreshToken);

    return {
      id: '',
      name: '',
      email: '',
      phone: '',
      phoneVerified: false,
      avatar: '',
      firstName: '',
      lastName: '',
    };
  },
);

export { signUp, signIn };
