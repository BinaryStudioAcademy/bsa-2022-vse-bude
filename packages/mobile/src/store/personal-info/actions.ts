import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullUserProfileDto, UpdateFullUserProfileDto } from '@vse-bude/shared';
import { AsyncThunkConfig } from '~/common/types/types';
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

export { getPersonalInfo, updatePersonalInfo };
