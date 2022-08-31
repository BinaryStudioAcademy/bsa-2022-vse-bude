import type { VerifyAction } from './actions';
import { VerifyActionTypes } from './action-types';

interface VerifyState {
  isModal: boolean;
  variant: number;
}

const initialState = {
  isModal: true,
  variant: 0,
};

const verifyReducer = (state = initialState, action: VerifyAction) => {
  switch (action.type) {
    case VerifyActionTypes.ShowVerifyModal:
      return {
        ...state,
        isModal: true,
      };
    case VerifyActionTypes.HideVerifyModal:
      return {
        ...state,
        isModal: false,
      };
    case VerifyActionTypes.NextVerifyModal:
      return {
        ...state,
        variant: state.variant + 1,
      };
    case VerifyActionTypes.PreviousVerifyModal:
      return {
        ...state,
        variant: state.variant - 1,
      };
    default:
      return state;
  }
};

export { verifyReducer };

export type { VerifyState };
