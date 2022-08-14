// import type { Http } from '@vse-bude/shared';
import {
  createAsyncThunk,

} from '@reduxjs/toolkit';

import { login } from 'services/auth';
import type { UserDto, UserSignInDto } from '@vse-bude/shared';
import { AuthActions } from './action-types';


export interface IAuth {
  token: string;
  user: UserDto;
}
const loginUser = createAsyncThunk(AuthActions.LOGIN, (data: UserSignInDto, { rejectWithValue }) =>
  login(data)
    .then(
      (data: IAuth) =>
        data,
    )
    .catch((data) => rejectWithValue(data.message)),
);

export {
  loginUser,

};
