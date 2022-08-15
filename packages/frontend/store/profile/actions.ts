import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionName } from '@vse-bude/shared';
import { getUser } from '@services';
import { auth } from '@helpers';
import { ProfileActions } from './action-types';

export const getCurrentUser = createAsyncThunk(
  ProfileActions.FETCH_USER,
  async (_request, { rejectWithValue }) => {
    try {
      return await getUser();
    } catch (err) {
      auth.logOut();

      return rejectWithValue(err?.message ?? ExceptionName.HTTP_ERROR);
    }
  },
);
