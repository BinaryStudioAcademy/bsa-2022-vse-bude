import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionName, HttpError, HttpStatusCode } from '@vse-bude/shared';
import { getUser } from '@services';
import { ProfileActions } from './action-types';

const logout = createAction(ProfileActions.LOG_OUT);

export const getCurrentUser = createAsyncThunk(
  ProfileActions.LOG_IN,
  async (_request, { dispatch, rejectWithValue }) => {
    try {
      return await getUser();
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpStatusCode.UNAUTHORIZED) {
        dispatch(logout());
      }

      return rejectWithValue(err?.message ?? ExceptionName.HTTP_ERROR);
    }
  },
);
