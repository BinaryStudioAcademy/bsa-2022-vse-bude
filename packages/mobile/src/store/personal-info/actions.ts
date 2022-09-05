import { createAsyncThunk } from '@reduxjs/toolkit';
import { SaveUserProfileDto } from '@vse-bude/shared';
import { AsyncThunkConfig } from '~/common/types/types';
import {
  personalInfoParser,
  updatePersonalInfoParser,
} from '~/helpers/helpers';
import { ActionType } from './common';

const getPersonalInfo = createAsyncThunk<
  SaveUserProfileDto,
  string,
  AsyncThunkConfig
>(ActionType.GET_USER_BY_ID, async (id, { extra }) => {
  const { personalInfoApi } = extra;
  const response = await personalInfoApi.getPersonalInfo(id);
  const personalInfo = personalInfoParser(response);

  return personalInfo;
});

const updatePersonalInfo = createAsyncThunk<
  SaveUserProfileDto,
  SaveUserProfileDto,
  AsyncThunkConfig
>(ActionType.UPDATE_PERSONAL_INFO, async (payload, { extra }) => {
  const { personalInfoApi } = extra;
  const parsedPayload = updatePersonalInfoParser(payload);
  const response = await personalInfoApi.updatePersonalInfo(parsedPayload);
  const personalInfo = personalInfoParser(response);

  return personalInfo;
});

export { getPersonalInfo, updatePersonalInfo };
