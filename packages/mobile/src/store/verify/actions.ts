import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmailVerifyDto, PhoneVerifyDto } from '@vse-bude/shared';
import { auth as authActions } from '~/store/actions';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const getVerificationCodePhone = createAsyncThunk<
  null,
  undefined,
  AsyncThunkConfig
>(ActionType.SEND_CODE_PHONE, async (_, { extra }) => {
  const { verificationApi } = extra;
  await verificationApi.getVerificationCodePhone();

  return null;
});

const getVerificationCodeEmail = createAsyncThunk<
  null,
  undefined,
  AsyncThunkConfig
>(ActionType.SEND_CODE_EMAIL, async (_, { extra }) => {
  const { verificationApi } = extra;
  await verificationApi.getVerificationCodeEmail();

  return null;
});

const verifyPhone = createAsyncThunk<null, PhoneVerifyDto, AsyncThunkConfig>(
  ActionType.VERIFY_PHONE,
  async (payload, { extra, dispatch }) => {
    const { verificationApi } = extra;
    await verificationApi.verifyPhone(payload);
    dispatch(authActions.getCurrentUser());

    return null;
  },
);

const verifyEmail = createAsyncThunk<null, EmailVerifyDto, AsyncThunkConfig>(
  ActionType.VERIFY_EMAIL,
  async (payload, { extra, dispatch }) => {
    const { verificationApi } = extra;
    await verificationApi.verifyEmail(payload);
    dispatch(authActions.getCurrentUser());

    return null;
  },
);

export {
  getVerificationCodePhone,
  getVerificationCodeEmail,
  verifyPhone,
  verifyEmail,
};
