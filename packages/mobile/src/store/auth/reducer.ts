import { UserDto } from '@vse-bude/shared';
import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { signUp, signIn, logOut } from './actions';

type State = {
  dataStatus: DataStatus;
  user: UserDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signUp.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(signUp.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.user = payload;
  });
  builder.addCase(signUp.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
    state.user = null;
  });
  builder.addCase(signIn.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(signIn.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.user = payload;
  });
  builder.addCase(signIn.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
    state.user = null;
  });
  builder.addCase(logOut.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.user = payload;
  });
  builder.addCase(logOut.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
    state.user = null;
  });
});

export { reducer };
