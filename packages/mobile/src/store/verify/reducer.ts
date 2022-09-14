import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import {
  verifyPhone,
  verifyEmail,
  getVerificationCodePhone,
  getVerificationCodeEmail,
} from './actions';

type State = {
  dataStatus: DataStatus;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      isAnyOf(
        verifyPhone.fulfilled,
        verifyEmail.fulfilled,
        getVerificationCodePhone.fulfilled,
        getVerificationCodeEmail.fulfilled,
      ),
      (state) => {
        state.dataStatus = DataStatus.FULFILLED;
      },
    )
    .addMatcher(
      isAnyOf(
        verifyPhone.rejected,
        verifyEmail.rejected,
        getVerificationCodePhone.rejected,
        getVerificationCodeEmail.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    )
    .addMatcher(
      isAnyOf(
        verifyPhone.pending,
        verifyEmail.pending,
        getVerificationCodePhone.pending,
        getVerificationCodeEmail.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    );
});

export { reducer };
