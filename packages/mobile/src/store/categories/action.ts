import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/common/types/types';
import { CategoryDto, HttpAcceptLanguage } from '@vse-bude/shared';
import i18n from 'i18next';
import { ActionType } from './common';

const loadAllCategories = createAsyncThunk<
  CategoryDto[],
  undefined,
  AsyncThunkConfig
>(ActionType.CATEGORIES_FETCH, async (_, { extra }) => {
  const { categoryApi } = extra;
  const locale = <HttpAcceptLanguage>i18n.resolvedLanguage;

  return categoryApi.getAllCategories(locale);
});

export { loadAllCategories };
