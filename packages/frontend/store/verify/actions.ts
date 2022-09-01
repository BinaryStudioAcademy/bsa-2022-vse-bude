import { VerifyActionTypes } from './action-types';

export interface VerifyAction {
  type: VerifyActionTypes;
  payload?: boolean | null;
}

export const showVerifyModal = (): VerifyAction => ({
  type: VerifyActionTypes.ShowVerifyModal,
});

export const hideVerifyModal = (): VerifyAction => ({
  type: VerifyActionTypes.HideVerifyModal,
});

export const nextVerifyModal = (): VerifyAction => ({
  type: VerifyActionTypes.NextVerifyModal,
});

export const previousVerifyModal = (): VerifyAction => ({
  type: VerifyActionTypes.PreviousVerifyModal,
});
