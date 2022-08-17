import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExceptionName } from '@vse-bude/shared';
import { getUser } from '@services';
import { auth } from '@helpers';
import { ProfileActions } from './action-types';

export const getCurrentUser = createAsyncThunk(
  ProfileActions.FETCH_USER,
  async (_request, { rejectWithValue }) => {
    const user = await getUser();
    console.log(user);

    if (!user) {
      auth.logOut();

      return rejectWithValue(ExceptionName.HTTP_ERROR);
    }

    return user;
  },
);
