import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getAllCategories, getAllCategoriesSSR } from 'services/category';
import { CategoryActions } from './action-types';

interface RequestOptionsSSR {
  httpSSR: Http;
}

export const fetchCategories = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  getAllCategories,
);

export const fetchCategoriesSSR = createAsyncThunk(
  CategoryActions.FETCH_CATEGORIES,
  async ({ httpSSR }: RequestOptionsSSR, { rejectWithValue }) =>
    getAllCategoriesSSR({ httpSSR }).catch(() => rejectWithValue([])),
);
