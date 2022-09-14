import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { Asset } from 'react-native-image-picker';
import { FullUserProfileDto, UpdateFullUserProfileDto } from '@vse-bude/shared';
import {
  AsyncThunkConfig,
  UpdateAvatarResponseDto,
} from '~/common/types/types';
import { ActionType } from './common';

const getPersonalInfo = createAsyncThunk<
  FullUserProfileDto,
  undefined,
  AsyncThunkConfig
>(ActionType.GET_PERSONAL_INFO, async (_, { extra }) => {
  const { personalInfoApi } = extra;
  const response = await personalInfoApi.getPersonalInfo();

  return response;
});

const updatePersonalInfo = createAsyncThunk<
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  AsyncThunkConfig
>(ActionType.UPDATE_PERSONAL_INFO, async (payload, { extra }) => {
  const { personalInfoApi } = extra;
  const response = await personalInfoApi.updatePersonalInfo(payload);

  return response;
});

const updateAvatar = createAsyncThunk<
  UpdateAvatarResponseDto,
  Asset | null,
  AsyncThunkConfig
>(ActionType.UPDATE_AVATAR, async (payload, { extra }) => {
  const { personalInfoApi } = extra;
  const response = await personalInfoApi.updateAvatar(payload);

  return response;
});

const resetPersonalInfo = createAction(ActionType.RESET_PERSONAL_INFO);

export { getPersonalInfo, updatePersonalInfo, updateAvatar, resetPersonalInfo };
