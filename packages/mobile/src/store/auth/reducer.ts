import { UserDto } from '@vse-bude/shared';
import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { signUp, signIn } from './actions';

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null,
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
    state.user = payload;
  });
  builder.addCase(signIn.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
    state.user = null;
  });
});

export type State = {
  dataStatus: DataStatus;
  user: UserDto | null;
};

export { reducer };
