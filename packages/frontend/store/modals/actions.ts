import { createAction } from '@reduxjs/toolkit';
import { VerifyActionTypes } from './action-types';

export interface VerifyAction {
  type: VerifyActionTypes;
  payload?: boolean | null;
}

export const showVerifyPhoneModal = createAction<string>(
  VerifyActionTypes.SHOW_VERIFY_PHONE_MODAL,
);

export const hideVerifyPhoneModal = createAction<string>(
  VerifyActionTypes.HIDE_VERIFY_PHONE_MODAL,
);

export const nextVerifyPhoneModal = createAction<string>(
  VerifyActionTypes.NEXT_VERIFY_PHONE_MODAL,
);

export const previousVerifyPhoneModal = createAction<string>(
  VerifyActionTypes.PREVIOUS_VERIFY_PHONE_MODAL,
);

export const showVerifyEmailModal = createAction<string>(
  VerifyActionTypes.SHOW_VERIFY_EMAIL_MODAL,
);

export const hideVerifyEmailModal = createAction<string>(
  VerifyActionTypes.HIDE_VERIFY_EMAIL_MODAL,
);

export const nextVerifyEmailModal = createAction<string>(
  VerifyActionTypes.NEXT_VERIFY_EMAIL_MODAL,
);

export const previousVerifyEmailModal = createAction<string>(
  VerifyActionTypes.PREVIOUS_VERIFY_EMAIL_MODAL,
);

export const showMakePostModal = createAction<string>(
  VerifyActionTypes.SHOW_MAKE_POST_MODAL,
);

export const hideMakePostModal = createAction<string>(
  VerifyActionTypes.HIDE_MAKE_POST_MODAL,
);
