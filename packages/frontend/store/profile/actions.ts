import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { getUser } from '@services';
import { auth } from '@helpers';
import { ProfileActions } from './action-types';

export const getCurrentUser = createAsyncThunk(
  ProfileActions.FETCH_PERSONAL_INFO,
  async (_request, { rejectWithValue }) => {
    try {
      return await getUser();
    } catch (e) {
      if (e instanceof HttpError) {
        if (e.status === HttpStatusCode.UNAUTHORIZED) {
          auth.logOut();
        }
      }

      return rejectWithValue(e.message);
    }
  },
);
