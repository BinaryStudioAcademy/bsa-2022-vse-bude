import { createReducer } from '@reduxjs/toolkit';
import {
  hideMakePostModal,
  hideVerifyPhoneModal,
  nextVerifyModal,
  previousVerifyModal,
  showMakePostModal,
  showVerifyPhoneModal,
} from './actions';

interface ModalsState {
  verifyPhoneModal: {
    isModalOpen: boolean;
    step: number;
  };
  isCreatePostModalOpen: boolean;
}

const initialState: ModalsState = {
  verifyPhoneModal: {
    isModalOpen: false,
    step: 0,
  },
  isCreatePostModalOpen: false,
};

export const modalsReducer = createReducer(initialState, {
  [showVerifyPhoneModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: true,
      step: state.verifyPhoneModal.step,
    },
  }),
  [hideVerifyPhoneModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: false,
      step: state.verifyPhoneModal.step,
    },
  }),
  [showMakePostModal.type]: (state) => ({
    ...state,
    isCreatePostModalOpen: true,
  }),
  [hideMakePostModal.type]: (state) => ({
    ...state,
    isCreatePostModalOpen: false,
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
