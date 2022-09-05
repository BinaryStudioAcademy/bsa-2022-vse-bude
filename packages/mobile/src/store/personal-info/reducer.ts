import { SaveUserProfileDto, UserAddressDto } from '@vse-bude/shared';
import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { DataStatus } from '~/common/enums/enums';
import { getPersonalInfo, updatePersonalInfo } from './actions';

type State = {
  dataStatus: DataStatus;
  user: SaveUserProfileDto | null;
  address: UserAddressDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  user: null,
  address: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      isAnyOf(getPersonalInfo.pending, updatePersonalInfo.pending),
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
      isAnyOf(getPersonalInfo.rejected, updatePersonalInfo.rejected),
      (state) => {
        state.dataStatus = DataStatus.REJECTED;
      },
    );
});

export { reducer };
