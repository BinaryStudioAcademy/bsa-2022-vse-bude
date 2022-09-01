import { createReducer } from '@reduxjs/toolkit';
import {
  hideVerifyModal,
  nextVerifyModal,
  previousVerifyModal,
  showVerifyModal,
} from './actions';

interface VerifyModalState {
  isVerifyPhoneModalOpen: boolean;
  variant: number;
}

const initialState: VerifyModalState = {
  isVerifyPhoneModalOpen: false,
  variant: 0,
};

export const verifyModalReducer = createReducer(initialState, {
  [showVerifyModal.type]: (state) => {
    console.log('obama');
    console.log(state);

    return {
      ...state,
      isVerifyPhoneModalOpen: true,
    };
  },
  [hideVerifyModal.type]: (state) => ({
    ...state,
    isVerifyPhoneModalOpen: false,
  }),
  [nextVerifyModal.type]: (state) => ({
    ...state,
    variant: state.variant + 1,
  }),
  [previousVerifyModal.type]: (state) => ({
    ...state,
    variant: state.variant - 1,
  }),
});

export type { VerifyModalState };
