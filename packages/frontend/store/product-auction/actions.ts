import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  AuctionPermissionsRequest,
  ProductIdRequest,
} from '@vse-bude/shared';
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
  async (data: ProductIdRequest, { rejectWithValue }) => {
    try {
      return await leaveAuctionRequest(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
