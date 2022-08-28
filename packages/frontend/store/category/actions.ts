import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http, HttpAcceptLanguage } from '@vse-bude/shared';
import { getAllCategories, getAllCategoriesSSR } from 'services/category';
import { CategoryActions } from './action-types';

interface RequestOptions {
  limit?: number;
  locale?: HttpAcceptLanguage;
}

interface RequestOptionsSSR extends RequestOptions {
  httpSSR: Http;
}

export const fetchCategories = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async ({ limit, locale }: RequestOptions) =>
    getAllCategories({ limit, locale }),
);

export const fetchCategoriesSSR = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async ({ httpSSR, limit, locale }: RequestOptionsSSR, { rejectWithValue }) =>
    getAllCategoriesSSR({ httpSSR, limit, locale }).catch(() =>
      rejectWithValue([]),
    ),
);
