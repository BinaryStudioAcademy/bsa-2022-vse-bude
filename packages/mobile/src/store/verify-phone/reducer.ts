import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { verifyPhone, getVerificationCode } from './actions';

type State = {
  dataStatus: DataStatus;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      isAnyOf(verifyPhone.fulfilled, getVerificationCode.fulfilled),
      (state) => {
        state.dataStatus = DataStatus.FULFILLED;
      },
    )
    .addMatcher(
      isAnyOf(verifyPhone.rejected, getVerificationCode.rejected),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    )
    .addMatcher(
      isAnyOf(verifyPhone.pending, getVerificationCode.pending),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    );
});

export { reducer };
