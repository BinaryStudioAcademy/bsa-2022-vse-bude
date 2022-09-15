import { FullUserProfileDto } from '@vse-bude/shared';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { getPersonalInfo, updatePersonalInfo, updateAvatar } from './actions';

type State = {
  dataStatus: DataStatus;
  user: FullUserProfileDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAvatar.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addMatcher(
      isAnyOf(
        getPersonalInfo.pending,
        updatePersonalInfo.pending,
        updateAvatar.pending,
      ),
      (state) => {
        state.dataStatus = DataStatus.PENDING;
      },
    )
    .addMatcher(
      isAnyOf(getPersonalInfo.fulfilled, updatePersonalInfo.fulfilled),
      (state, { payload }) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.user = payload;
      },
    )
    .addMatcher(
      isAnyOf(
        getPersonalInfo.rejected,
        updatePersonalInfo.rejected,
        updateAvatar.rejected,
      ),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
});

export { reducer };
