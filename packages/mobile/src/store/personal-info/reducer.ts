import { FullUserProfileDto } from '@vse-bude/shared';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { auth as authActions } from '~/store/actions';
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
    .addCase(authActions.logOut.fulfilled, (state) => {
      state.user = null;
    })
    .addCase(updateAvatar.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (state.user) {
        state.user.avatar = action.payload.avatar?.toString();
      }
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
