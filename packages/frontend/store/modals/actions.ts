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

export const showMakePostModal = createAction<string>(
  VerifyActionTypes.SHOW_MAKE_POST_MODAL,
);

export const hideMakePostModal = createAction<string>(
  VerifyActionTypes.HIDE_MAKE_POST_MODAL,
);

export const nextVerifyModal = createAction<string>(
  VerifyActionTypes.NEXT_VERIFY_MODAL,
);

export const previousVerifyModal = createAction<string>(
  VerifyActionTypes.PREVIOUS_VERIFY_MODAL,
);
