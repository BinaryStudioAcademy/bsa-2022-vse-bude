import { createAsyncThunk } from '@reduxjs/toolkit';
import { PhoneVerifyDto } from '@vse-bude/shared';
import { auth as authActions } from '~/store/actions';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const sendCodeVerifyPhone = createAsyncThunk<null, undefined, AsyncThunkConfig>(
  ActionType.SEND_CODE,
  async (_, { extra, getState }) => {
    const { verifyPhoneApi } = extra;
    const userId = getState().auth.user?.id;

    if (userId) {
      await verifyPhoneApi.sendCodeVerifyPhone(userId);
    }

    return null;
  },
);

const verifyPhone = createAsyncThunk<null, PhoneVerifyDto, AsyncThunkConfig>(
  ActionType.VERIFY_PHONE,
  async (payload, { extra, getState, dispatch }) => {
    const { verifyPhoneApi } = extra;
    const userId = getState().auth.user?.id;
    if (userId) {
      await verifyPhoneApi.verifyPhone(payload, userId);
      dispatch(authActions.getCurrentUser());
    }

    return null;
  },
);

export { sendCodeVerifyPhone, verifyPhone };
