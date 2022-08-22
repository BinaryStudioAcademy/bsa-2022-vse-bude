import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getAllCategories, getAllCategoriesSSR } from 'services/category';
import { CategoryActions } from './action-types';

interface RequestOptions {
  limit?: number;
}

interface RequestOptionsSSR extends RequestOptions {
  httpSSR: Http;
}

export const fetchCategories = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async ({ limit }: RequestOptions) => getAllCategories({ limit }),
);

export const fetchCategoriesSSR = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async ({ httpSSR, limit }: RequestOptionsSSR, { rejectWithValue }) =>
    getAllCategoriesSSR({ httpSSR, limit }).catch(() => rejectWithValue([])),
);
