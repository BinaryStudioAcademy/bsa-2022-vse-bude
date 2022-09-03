import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { UserDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { signUp, signIn, logOut, verifyPhone } from './actions';

type State = {
  dataStatus: DataStatus;
  user: UserDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logOut.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.user = null;
    })
    .addCase(logOut.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
      state.user = null;
    })
    .addCase(verifyPhone.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (state.user) {
        state.user.phoneVerified = payload;
      }
    })
    .addCase(verifyPhone.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addMatcher(
      isAnyOf(signUp.pending, signIn.pending, verifyPhone.pending),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(signUp.fulfilled, signIn.fulfilled),
      (state, { payload }) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.user = payload;
      },
    )
    .addMatcher(isAnyOf(signUp.rejected, signIn.rejected), (state) => {
      state.dataStatus = DataStatus.REJECTED;
      state.user = null;
    });
});

export { reducer };
