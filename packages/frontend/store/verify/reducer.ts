import type { VerifyAction } from './actions';
import { VerifyActionTypes } from './action-types';

interface VerifyState {
  isVerifyPhoneModalOpen: boolean;
  variant: number;
}

const initialState = {
  isVerifyPhoneModalOpen: true,
  variant: 0,
};

const verifyReducer = (state = initialState, action: VerifyAction) => {
  switch (action.type) {
    case VerifyActionTypes.ShowVerifyModal:
      return {
        ...state,
        isVerifyPhoneModalOpen: true,
      };
    case VerifyActionTypes.HideVerifyModal:
      return {
        ...state,
        isVerifyPhoneModalOpen: false,
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
