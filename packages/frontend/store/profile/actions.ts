import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http, UpdateFullUserProfileDto } from '@vse-bude/shared';
import {
  getUserProfileSSR,
  getFullUserProfile,
  updateUserData,
  updateAvatar,
} from '@services';
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

export const updateUserProfile = createAsyncThunk(
  ProfileActions.SAVE_USER_PROFILE,
  async ({ data }: { data: UpdateFullUserProfileDto }, { rejectWithValue }) =>
    updateUserData({ data }).catch((e) => rejectWithValue(e.message)),
);

export const updateUserAvatar = createAsyncThunk(
  ProfileActions.UPDATE_USER_AVATAR,
  async (file: FormData, { rejectWithValue }) =>
    updateAvatar(file).catch((e) => rejectWithValue(e.message)),
);
