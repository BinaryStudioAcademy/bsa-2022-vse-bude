import { t } from 'i18next';
import { notification } from '~/services/services';
import { AppDispatch } from '~/common/types/types';
import { Middleware, AnyAction } from '@reduxjs/toolkit';

const errorHandler: Middleware =
  () => (next: AppDispatch) => (action: AnyAction) => {
    if (action.error) {
      const {
        error: { message },
      } = action;

      notification.error(message, t('common:common.ERROR'));

      return next(action);
    }
  };

export { errorHandler };
