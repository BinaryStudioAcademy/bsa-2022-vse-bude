import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { signUp, signIn } from './actions';

export type State = {
  dataStatus: DataStatus;
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signUp.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(signUp.fulfilled, (state) => {
    state.dataStatus = DataStatus.FULFILLED;
  });
  builder.addCase(signUp.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
  builder.addCase(signIn.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(signIn.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
    state.isLoggedIn = true;
  });
  builder.addCase(signIn.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
    state.accessToken = '';
    state.refreshToken = '';
    state.isLoggedIn = false;
  });
});

export { reducer };
