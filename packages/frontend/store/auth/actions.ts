// import type { Http } from '@vse-bude/shared';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { login } from 'services/auth';
import type { UserDto, UserSignInDto } from '@vse-bude/shared';
import { StorageKey } from '@vse-bude/shared';
import { cookieStorage } from '@helpers';
import { AuthActions } from './action-types';

export interface IAuth {
  user: UserDto;
  error?: string;
  accessToken: string;
  accessExpiresAt: number;
  refreshToken: string;
}
const loginUser = createAsyncThunk(
  AuthActions.LOGIN,
  (data: UserSignInDto, { rejectWithValue }) =>
    login(data)
      .then((data: IAuth) => {
        if (data?.error) {
          return rejectWithValue(data.error);
        }
        const expiresAt = new Date(Date.now() + data.accessExpiresAt);
        cookieStorage.set<string>(StorageKey.ACCESS_TOKEN, data.accessToken, {
          expires: expiresAt,
        });
        cookieStorage.set<string>(StorageKey.REFRESH_TOKEN, data.refreshToken);
        
return data;
      })
      .catch((error) => {
        if (error instanceof Error) {
          rejectWithValue(error.message);
        }
      }),
);

export { loginUser };
