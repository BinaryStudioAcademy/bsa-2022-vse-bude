import { createReducer } from '@reduxjs/toolkit';
import {
  hideVerifyModal,
  nextVerifyModal,
  previousVerifyModal,
  showVerifyModal,
} from './actions';

interface ModalsState {
  verifyPhoneModal: {
    isModalOpen: boolean;
    step: number;
  };
  isCreatePostModalShown: boolean;
}

const initialState: ModalsState = {
  verifyPhoneModal: {
    isModalOpen: true,
    step: 0,
  },
  isCreatePostModalShown: false,
};

export const modalsReducer = createReducer(initialState, {
  [showVerifyModal.type]: (state) => ({
    ...state,
    isVerifyPhoneModalOpen: true,
  }),
  [hideVerifyModal.type]: (state) => ({
    ...state,
    isVerifyPhoneModalOpen: false,
  }),
  [nextVerifyModal.type]: (state) => ({
    ...state,
    variant: state.verifyPhoneModal.step + 1,
  }),
  [previousVerifyModal.type]: (state) => ({
    ...state,
    variant: state.verifyPhoneModal.step - 1,
  }),
});

export type { ModalsState };
