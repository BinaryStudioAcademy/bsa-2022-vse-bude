import { createSlice } from '@reduxjs/toolkit';
import type { HydrateAction } from '@types';
import type {
  AllNotificationsResponse,
  FullUserProfileDto,
  UserProfileDto,
} from '@vse-bude/shared';
import { HYDRATE } from 'next-redux-wrapper';
import { phoneVerification } from '../auth';
import {
  fetchUserProfileSSR,
  fetchFullUserProfile,
  updateUserProfile,
  updateUserAvatar,
  fetchUserNotifications,
  updateNotificationView,
  loadMoreUserNotifications,
} from './actions';

interface ProfileState {
  user: UserProfileDto | FullUserProfileDto | null;
  notifications: AllNotificationsResponse;
  isEditing: boolean;
  loading: boolean;
  saveLoader: boolean;
  error: string;
  loadMoreLoading: boolean;
  updateViewLoading: boolean;
}

const NOTIFICATION_INITIAL_STATE: AllNotificationsResponse = {
  notifications: null,
  count: 0,
};

const initialState: ProfileState = {
  user: null,
  notifications: NOTIFICATION_INITIAL_STATE,
  isEditing: false,
  loading: false,
  loadMoreLoading: false,
  updateViewLoading: false,
  saveLoader: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
  extraReducers: {
    [fetchUserProfileSSR.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserProfileSSR.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [fetchUserProfileSSR.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    },

    [fetchFullUserProfile.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchFullUserProfile.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },

    [fetchFullUserProfile.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    },
    [fetchUserNotifications.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUserNotifications.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.notifications = payload;
    },

    [fetchUserNotifications.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.notifications = NOTIFICATION_INITIAL_STATE;
      state.error = payload;
    },
    [loadMoreUserNotifications.pending.type]: (state) => {
      state.loadMoreLoading = true;
    },
    [loadMoreUserNotifications.fulfilled.type]: (state, { payload }) => {
      state.loadMoreLoading = false;
      state.notifications.notifications = [
        ...state.notifications.notifications,
        ...payload.notifications,
      ];
    },

    [loadMoreUserNotifications.rejected.type]: (state, { payload }) => {
      state.loadMoreLoading = false;
      state.error = payload;
    },
    [updateNotificationView.pending.type]: (state) => {
      state.updateViewLoading = true;
    },
    [updateNotificationView.fulfilled.type]: (state, { payload }) => {
      state.updateViewLoading = false;
      state.notifications.notifications =
        state.notifications.notifications?.filter(
          (item) => payload.id !== item.id,
        );
      state.notifications.count = state.notifications.count - 1;
    },

    [updateNotificationView.rejected.type]: (state) => {
      state.updateViewLoading = false;
    },

    [updateUserProfile.fulfilled.type]: (state, { payload }) => {
      state.saveLoader = false;
      state.user = payload;
    },

    [phoneVerification.fulfilled.type]: (state) => {
      state.user = {
        ...state.user,
        phoneVerified: true,
      };
    },

    [updateUserProfile.pending.type]: (state) => {
      state.saveLoader = true;
    },

    [updateUserProfile.rejected.type]: (state, { payload }) => {
      state.saveLoader = false;
      state.error = payload;
    },

    [updateUserAvatar.pending.type]: (state, { _payload }) => {
      state.user.avatar = null;
    },
    [updateUserAvatar.fulfilled.type]: (state, { payload }) => {
      state.user.avatar = payload.avatar;
      state.loading = false;
    },
    [updateUserAvatar.rejected.type]: (state, { _payload }) => {
      state.loading = false;
    },

    [HYDRATE](state, { payload }: HydrateAction) {
      if (payload.profile.user) {
        state.user = payload.profile.user;
      }
    },
  },
});

export const profileReducer = profileSlice.reducer;

export const { setIsEditing } = profileSlice.actions;

export type { ProfileState };
