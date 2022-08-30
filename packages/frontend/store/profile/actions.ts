import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getUserProfileSSR, getFullUserProfileSSR } from '@services';
import { ProfileActions } from './action-types';

export const fetchUserProfileSSR = createAsyncThunk(
  ProfileActions.FETCH_USER_PROFILE,
  async (params: { userId: string; http: Http }, { rejectWithValue }) =>
    getUserProfileSSR(params).catch((e) => rejectWithValue(e.message)),
);

export const fetchFullUserProfileSSR = createAsyncThunk(
  ProfileActions.FETCH_FULL_USER_PROFILE,
  async (params: { http: Http }, { rejectWithValue }) =>
    getFullUserProfileSSR(params).catch((e) => rejectWithValue(e.message)),
);
