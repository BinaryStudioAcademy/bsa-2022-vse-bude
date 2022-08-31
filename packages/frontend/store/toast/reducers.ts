import { createReducer } from '@reduxjs/toolkit';
import type { Toast } from '@types';
import { addToast, removeToast } from './actions';

export interface ToastState {
  list: Toast[];
}

const initialState: ToastState = {
  list: [],
};

export const toastReducer = createReducer(initialState, {
  [addToast.fulfilled.type]: (state, { payload }) => ({
    list: [payload, ...state.list],
  }),
  [removeToast.type]: (state, { payload }) => ({
    list: state.list.filter(({ id }) => id !== payload),
  }),
});
