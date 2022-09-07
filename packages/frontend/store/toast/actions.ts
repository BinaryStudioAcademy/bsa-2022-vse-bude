import { nanoid, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CreateToast, ToastLevel } from '@types';
import type { TFunction } from 'next-i18next';
import { i18n } from 'next-i18next';
import { ToastActions } from './action-types';

const CLOSE_NOTIFICATION_TIMEOUT: Record<ToastLevel, number> = {
  success: 2500,
  info: 1500,
  warning: 2000,
  error: 3000,
};

const getDefaultLabel = (level: ToastLevel, t: TFunction) =>
  ({
    success: t('common:notifications.defaultSuccessTitle'),
    info: t('common:notifications.defaultInfoTitle'),
    warning: t('common:notifications.defaultWarningTitle'),
    error: t('common:notifications.defaultErrorTitle'),
  }[level]);

export const addToast = createAsyncThunk(
  ToastActions.ADD_TOAST,
  async ({ level, title, description }: CreateToast, { dispatch }) => {
    const id = nanoid();

    setTimeout(() => {
      dispatch(removeToast(id));
    }, CLOSE_NOTIFICATION_TIMEOUT[level]);

    return {
      id,
      level,
      title:
        typeof title === 'function'
          ? title(i18n.t)
          : title ?? getDefaultLabel(level, i18n.t),
      description:
        typeof description === 'function' ? description(i18n.t) : description,
    };
  },
);

export const removeToast = createAction<string>(ToastActions.REMOVE_TOAST);
