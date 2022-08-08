import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Http } from '@vse-bude/shared';
import { getRandomData, getRandomDataSSR } from '@services';
import { RandomDataActions } from './action-types';

export const fetchRandomData = createAsyncThunk(
  RandomDataActions.FETCH,
  async (_, { rejectWithValue }) =>
    getRandomData().catch(() => rejectWithValue([])),
);

export const fetchRandomDataSSR = createAsyncThunk(
  RandomDataActions.FETCH,
  async (httpSSR: Http, { rejectWithValue }) =>
    getRandomDataSSR(httpSSR).catch(() => rejectWithValue([])),
);
