import { createReducer } from '@reduxjs/toolkit';
import {
  hideVerifyModal,
  nextVerifyModal,
  previousVerifyModal,
  showVerifyModal,
} from './actions';

interface ModalsState {
  isVerifyPhoneModalOpen: boolean;
  variant: number; 
  isCreatePostModalShown: boolean;
}

const initialState: ModalsState = {
  isVerifyPhoneModalOpen: false,
  variant: 0,
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
    variant: state.variant + 1,
  }),
  [previousVerifyModal.type]: (state) => ({
    ...state,
    variant: state.variant - 1,
  }),
});

export type { ModalsState };
