import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { randomDataReducer } from './random-data';

const makeStore = () =>
  configureStore({
    reducer: {
      randomData: randomDataReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
