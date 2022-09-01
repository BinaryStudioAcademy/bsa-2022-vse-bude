import { createReducer } from '@reduxjs/toolkit';
import { auctionPermissions } from './actions';

export interface ProductAuctionState {
  permissions: {
    isAbleToLeaveAuction: boolean;
  };
}

const initialState: ProductAuctionState = {
  permissions: {
    isAbleToLeaveAuction: false,
  },
};

export const auctionReducer = createReducer(initialState, {
  [auctionPermissions.pending.type]: (state) => {
    state.permissions = {
      ...state.permissions,
      isAbleToLeaveAuction: false,
    };
  },
  [auctionPermissions.fulfilled.type]: (state, { payload }) => {
    state.permissions = {
      ...state.permissions,
      isAbleToLeaveAuction: payload.isAbleToLeaveAuction,
    };
  },
  [auctionPermissions.rejected.type]: (state) => {
    state.permissions = {
      ...state.permissions,
      isAbleToLeaveAuction: false,
    };
  },
});
