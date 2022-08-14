import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { randomDataReducer } from './random-data';
import { authReducer } from './auth';

const makeStore = () =>
  configureStore({
    reducer: {
      randomData: randomDataReducer,
      auth: authReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
