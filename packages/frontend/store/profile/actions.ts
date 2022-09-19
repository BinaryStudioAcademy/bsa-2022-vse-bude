import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Http,
  NotificationQuery,
  UpdateFullUserProfileDto,
} from '@vse-bude/shared';
import {
  getUserProfileSSR,
  getFullUserProfile,
  updateUserData,
  updateAvatar,
  getUserNotifications,
  setViewedNotification,
} from '@services';
import { addToast } from 'store/toast/actions';
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
  async (
    { data }: { data: UpdateFullUserProfileDto },
    { rejectWithValue, dispatch },
  ) =>
    updateUserData({ data })
      .then((data) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.profileUpdated'),
          }),
        );

        return data;
      })
      .catch((e) => {
        dispatch(
          addToast({
            level: 'error',
            description: e.message,
          }),
        );

        return rejectWithValue(e.message);
      }),
);

export const updateUserAvatar = createAsyncThunk(
  ProfileActions.UPDATE_USER_AVATAR,
  async (file: FormData, { rejectWithValue, dispatch }) =>
    updateAvatar(file)
      .then((data) => {
        dispatch(
          addToast({
            level: 'success',
            description: (t) => t('common:notifications.avatarUpdated'),
          }),
        );

        return data;
      })
      .catch((e) => {
        dispatch(
          addToast({
            level: 'error',
            description: e.message,
          }),
        );

        return rejectWithValue(e.message);
      }),
);
export const fetchUserNotifications = createAsyncThunk(
  ProfileActions.FETCH_NOTIFICATIONS,
  (filter: NotificationQuery, { rejectWithValue }) =>
    getUserNotifications(filter).catch((e) => rejectWithValue(e.message)),
);
export const loadMoreUserNotifications = createAsyncThunk(
  ProfileActions.UPLOAD_NOTIFICATIONS,
  (filter: NotificationQuery, { rejectWithValue }) =>
    getUserNotifications(filter).catch((e) => rejectWithValue(e.message)),
);

export const updateNotificationView = createAsyncThunk(
  ProfileActions.SET_NOTIFICATION_VIEWED,
  (id: string, { rejectWithValue, dispatch }) => {
    dispatch(setUpdateViewLoading(id));

    return setViewedNotification(id).catch((e) => rejectWithValue(e.message));
  },
);

export const setUpdateViewLoading = createAction<string>(
  ProfileActions.SET_NOTIFICATION_VIEWED_LOADING,
);
