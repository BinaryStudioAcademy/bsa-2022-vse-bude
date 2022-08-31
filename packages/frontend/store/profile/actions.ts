import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getUserProfileSSR, getFullUserProfile } from '@services';
import { ProfileActions } from './action-types';

export const fetchUserProfileSSR = createAsyncThunk(
  ProfileActions.FETCH_USER_PROFILE,
  async (params: { userId: string; http: Http }, { rejectWithValue }) =>
    getUserProfileSSR(params).catch((e) => rejectWithValue(e.message)),
);

export const fetchFullUserProfile = createAsyncThunk(
  ProfileActions.FETCH_FULL_USER_PROFILE,
  async (_, { rejectWithValue }) =>
    getFullUserProfile().catch((e) => rejectWithValue(e.message)),
);
