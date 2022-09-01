import { createAction } from '@reduxjs/toolkit';
import { VerifyActionTypes } from './action-types';

export interface VerifyAction {
  type: VerifyActionTypes;
  payload?: boolean | null;
}

export const showVerifyModal = createAction<string>(VerifyActionTypes.SHOW_VERIFY_MODAL);

export const hideVerifyModal = createAction<string>(VerifyActionTypes.HIDE_VERIFY_MODAL);

export const nextVerifyModal = createAction<string>(VerifyActionTypes.NEXT_VERIFY_MODAL);

export const previousVerifyModal = createAction<string>(VerifyActionTypes.PREVIOUS_VERIFY_MODAL);

