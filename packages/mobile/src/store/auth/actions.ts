import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSignUpDto, UserSignInDto, UserDto } from '@vse-bude/shared';
import { StorageKey } from '~/common/enums/enums';
import { AsyncThunkConfig } from '~/common/types/types';
import { authUserParser } from '~/helpers/helpers';
import { ActionType } from './common';

const signUp = createAsyncThunk<UserDto, UserSignUpDto, AsyncThunkConfig>(
  ActionType.SIGN_UP,
  async (payload, { extra }) => {
    const { authApi, storage } = extra;
    const response = await authApi.signUp(payload);
    const user = authUserParser(response.user);

    storage.setItem(StorageKey.ACCESS_TOKEN, response.accessToken);
    storage.setItem(StorageKey.REFRESH_TOKEN, response.refreshToken);

    return user;
  },
);

const signIn = createAsyncThunk<UserDto, UserSignInDto, AsyncThunkConfig>(
  ActionType.SIGN_IN,
  async (payload, { extra }) => {
    const { authApi, storage } = extra;
    const response = await authApi.signIn(payload);
    const user = authUserParser(response.user);

    storage.setItem(StorageKey.ACCESS_TOKEN, response.accessToken);
    storage.setItem(StorageKey.REFRESH_TOKEN, response.refreshToken);

    return user;
  },
);

export { signUp, signIn };
