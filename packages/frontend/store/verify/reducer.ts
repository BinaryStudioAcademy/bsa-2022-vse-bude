import { createSlice } from '@reduxjs/toolkit';

interface VerifyState {
  isModal: boolean;
}

const initialState: VerifyState = {
  isModal: true,
};

const verifySlice = createSlice({
  name: 'verify',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const verifyReducer = verifySlice.reducer;

export type { VerifyState };
