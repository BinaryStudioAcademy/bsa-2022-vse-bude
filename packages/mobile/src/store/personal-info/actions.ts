import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfileDto } from '@vse-bude/shared';
import { AsyncThunkConfig } from '~/common/types/types';
import { ActionType } from './common';

const getUserById = createAsyncThunk<UserProfileDto, string, AsyncThunkConfig>(
  ActionType.GET_USER_BY_ID,
  async (id, { extra }) => {
    const { personalInfoApi } = extra;
    const response = await personalInfoApi.getUserById(id);

    return response;
  },
);

const updatePersonalInfo = createAsyncThunk<
  UserProfileDto,
  UserProfileDto,
  AsyncThunkConfig
>(ActionType.UPDATE_PERSONAL_INFO, async (payload, { extra }) => {
  const { personalInfoApi } = extra;
  const response = await personalInfoApi.updatePersonalInfo(payload);

  return response;
});

export { getUserById, updatePersonalInfo };
