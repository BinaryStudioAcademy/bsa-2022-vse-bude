import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneVerifyDto } from '@vse-bude/shared';
import { auth as authActions } from '~/store/actions';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const getVerificationCode = createAsyncThunk<null, undefined, AsyncThunkConfig>(
  ActionType.SEND_CODE,
  async (_, { extra }) => {
    const { phoneVerificationApi } = extra;
    await phoneVerificationApi.getVerificationCode();

    return null;
  },
);

const verifyPhone = createAsyncThunk<null, PhoneVerifyDto, AsyncThunkConfig>(
  ActionType.VERIFY_PHONE,
  async (payload, { extra, dispatch }) => {
    const { phoneVerificationApi } = extra;
    await phoneVerificationApi.verifyPhone(payload);
    dispatch(authActions.getCurrentUser());

    return null;
  },
);

export { getVerificationCode, verifyPhone };
