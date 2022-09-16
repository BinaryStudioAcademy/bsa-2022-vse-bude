import { createReducer } from '@reduxjs/toolkit';
import { emailVerification, phoneVerification } from 'store/auth';
import {
  hideMakePostModal,
  hideVerifyEmailModal,
  hideVerifyPhoneModal,
  nextVerifyEmailModal,
  nextVerifyPhoneModal,
  previousVerifyEmailModal,
  previousVerifyPhoneModal,
  showMakePostModal,
  showVerifyEmailModal,
  showVerifyPhoneModal,
} from './actions';

interface ModalsState {
  verifyPhoneModal: {
    isModalOpen: boolean;
    step: number;
  };
  verifyEmailModal: {
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
  verifyEmailModal: {
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
  [nextVerifyPhoneModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: state.verifyPhoneModal.isModalOpen,
      step: state.verifyPhoneModal.step + 1,
    },
  }),
  [previousVerifyPhoneModal.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: state.verifyPhoneModal.isModalOpen,
      step: state.verifyPhoneModal.step - 1,
    },
  }),

  [phoneVerification.fulfilled.type]: (state) => ({
    ...state,
    verifyPhoneModal: {
      isModalOpen: state.verifyPhoneModal.isModalOpen,
      step: state.verifyPhoneModal.step + 1,
    },
  }),
  [emailVerification.fulfilled.type]: (state) => ({
    ...state,
    verifyEmailModal: {
      isModalOpen: state.verifyEmailModal.isModalOpen,
      step: state.verifyEmailModal.step + 1,
    },
  }),

  [showVerifyEmailModal.type]: (state) => ({
    ...state,
    verifyEmailModal: {
      isModalOpen: true,
      step: state.verifyEmailModal.step,
    },
  }),
  [hideVerifyEmailModal.type]: (state) => ({
    ...state,
    verifyEmailModal: {
      isModalOpen: false,
      step: state.verifyEmailModal.step,
    },
  }),
  [nextVerifyEmailModal.type]: (state) => ({
    ...state,
    verifyEmailModal: {
      isModalOpen: state.verifyEmailModal.isModalOpen,
      step: state.verifyEmailModal.step + 1,
    },
  }),
  [previousVerifyEmailModal.type]: (state) => ({
    ...state,
    verifyEmailModal: {
      isModalOpen: state.verifyEmailModal.isModalOpen,
      step: state.verifyEmailModal.step - 1,
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
});

export type { ModalsState };
