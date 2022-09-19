import { t } from 'i18next';
import { ExceptionName } from '@vse-bude/shared';
import { Middleware, AnyAction } from '@reduxjs/toolkit';
import { notification } from '~/services/services';
import { AppDispatch } from '~/common/types/types';
import { auth as authActions } from '~/store/actions';

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
