import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getAllCategories, getAllCategoriesSSR } from 'services/category';
import { CategoryActions } from './action-types';

export const fetchCategories = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async (limit: number) => getAllCategories(limit),
);

export const fetchCategoriesSSR = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async (httpSSR: Http, { rejectWithValue }) =>
    getAllCategoriesSSR(httpSSR, 4).catch(() => rejectWithValue([])),
);
