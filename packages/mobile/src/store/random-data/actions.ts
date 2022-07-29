import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomData } from '../../services';
import { RandomDataActions } from './action-types';

export const fetchRandomData = createAsyncThunk(
  RandomDataActions.FETCH,
  async (_, { rejectWithValue }) => getRandomData().catch(() => rejectWithValue([])),
);
