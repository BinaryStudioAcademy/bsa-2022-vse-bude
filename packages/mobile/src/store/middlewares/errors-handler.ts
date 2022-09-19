import { t } from 'i18next';
import { notification } from '~/services/services';
import { AppDispatch } from '~/common/types/types';
import { Middleware, AnyAction } from '@reduxjs/toolkit';
import { auth as authActions } from '~/store/actions';
import { ExceptionName } from '@vse-bude/shared';

type HandleErrorParams = {
  dispatch: AppDispatch;
};

const errorHandler: Middleware =
  ({ dispatch }: HandleErrorParams) =>
  (next: AppDispatch) =>
  (action: AnyAction) => {
    if (action.error) {
      const {
        error: { name, message },
      } = action;

      notification.error(message, t('common:common.ERROR'));

      if (name === ExceptionName.INVALID_CREDENTIALS) {
        dispatch(authActions.logOut());
      }
    }

    return next(action);
  };

export { errorHandler };
