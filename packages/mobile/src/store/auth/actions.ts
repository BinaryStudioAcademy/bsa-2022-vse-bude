import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserDto, UserSignUpDto } from '@vse-bude/shared';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const signUp = createAsyncThunk<UserDto, UserSignUpDto, AsyncThunkConfig>(
  ActionType.SIGN_UP,
  async (payload, { extra }) => {
    const { authApi } = extra;

    return authApi.signUp(payload);
  },
);

export { signUp };
