import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { verifyPhone, sendCodeVerifyPhone } from './actions';

type State = {
  dataStatus: DataStatus;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      isAnyOf(verifyPhone.fulfilled, sendCodeVerifyPhone.fulfilled),
      (state) => {
        state.dataStatus = DataStatus.FULFILLED;
      },
    )
    .addMatcher(
      isAnyOf(verifyPhone.rejected, sendCodeVerifyPhone.rejected),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    )
    .addMatcher(
      isAnyOf(verifyPhone.pending, sendCodeVerifyPhone.pending),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    );
});

export { reducer };
