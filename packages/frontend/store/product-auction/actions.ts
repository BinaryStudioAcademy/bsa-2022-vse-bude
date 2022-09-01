import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  AuctionPermissionsRequest,
  ProductIdRequest,
} from '@vse-bude/shared';
import { addToast } from 'store/toast/actions';
import {
  fetchAuctionPermissions,
  leaveAuctionRequest,
} from '../../services/product';
import { AuctionProductActions } from './action-types';

export const auctionPermissions = createAsyncThunk(
  AuctionProductActions.AUCTION_PERMISSIONS,
  async (data: AuctionPermissionsRequest, { rejectWithValue }) => {
    try {
      return await fetchAuctionPermissions(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const auctionLeaveAction = createAsyncThunk(
  AuctionProductActions.AUCTION_LEAVE,
  async (data: ProductIdRequest, { rejectWithValue, dispatch }) => {
    try {
      const result = await leaveAuctionRequest(data);
      dispatch(
        addToast({
          level: 'info',
          description: (t) => t('common:notifications.leftAuction'),
        }),
      );

      return result;
    } catch (e) {
      dispatch(
        addToast({
          level: 'error',
          description: e.message,
        }),
      );

      return rejectWithValue(e.message);
    }
  },
);
