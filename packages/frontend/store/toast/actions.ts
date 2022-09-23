import { nanoid, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CreateToast, ToastLevel } from '@types';
import { i18n } from 'next-i18next';
import { ToastActions } from './action-types';

const CLOSE_NOTIFICATION_TIMEOUT: Record<ToastLevel, number> = {
  success: 3500,
  info: 3500,
  warning: 3500,
  error: 3500,
};

export const addToast = createAsyncThunk(
  ToastActions.ADD_TOAST,
  async ({ level, description }: CreateToast, { dispatch }) => {
    const id = nanoid();

    setTimeout(() => {
      dispatch(removeToast(id));
    }, CLOSE_NOTIFICATION_TIMEOUT[level]);

    return {
      id,
      level,
      description:
        typeof description === 'function' ? description(i18n.t) : description,
    };
  },
);

export const removeToast = createAction<string>(ToastActions.REMOVE_TOAST);
