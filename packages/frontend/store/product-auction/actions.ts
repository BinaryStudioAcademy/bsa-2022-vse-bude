import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AuctionPermissionsRequest } from '@vse-bude/shared';
import { fetchAuctionPermissions } from '../../services/product';
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
