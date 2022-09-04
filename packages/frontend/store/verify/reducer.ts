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
    isModalOpen: false,
    step: 0,
  },
  isCreatePostModalShown: false,
};

export const modalsReducer = createReducer(initialState, {
  [showVerifyModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: true,
      step: state.verifyPhoneModal.step,
    },
  }),
  [hideVerifyModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: false,
      step: state.verifyPhoneModal.step,
    },
  }),
  [nextVerifyModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: state.verifyPhoneModal.isModalOpen,
      step: state.verifyPhoneModal.step + 1,
    },
  }),
  [previousVerifyModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: state.verifyPhoneModal.isModalOpen,
      step: state.verifyPhoneModal.step - 1,
    },
  }),
});

export type { ModalsState };
