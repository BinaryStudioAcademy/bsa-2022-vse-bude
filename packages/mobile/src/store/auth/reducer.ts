import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { UserDto } from '@vse-bude/shared';
import { DataStatus } from '~/common/enums/enums';
import { signUp, signIn, getCurrentUser, logOut } from './actions';

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
    .addCase(getCurrentUser.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    })
    .addMatcher(
      isAnyOf(signUp.pending, signIn.pending, getCurrentUser.pending),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(signUp.fulfilled, signIn.fulfilled, getCurrentUser.fulfilled),
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
