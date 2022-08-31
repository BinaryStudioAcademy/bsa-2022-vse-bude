import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getUserProfileSSR, updateAvatar } from 'services/profile';
import { ProfileActions } from './action-types';

export const fetchUserProfileSSR = createAsyncThunk(
  ProfileActions.FETCH_USER_PROFILE,
  async (params: { userId: string; http: Http }, { rejectWithValue }) =>
    getUserProfileSSR(params).catch((e) => rejectWithValue(e.message)),
);

export const fetchUpdateUserAvatar = createAsyncThunk(
  ProfileActions.UPDATE_USER_AVATAR,
  async (file: FormData, { rejectWithValue }) =>
    updateAvatar(file).catch((e) => rejectWithValue(e.message)),
);
