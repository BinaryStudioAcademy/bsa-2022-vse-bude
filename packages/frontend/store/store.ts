import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { randomDataReducer } from './random-data';
import { profileReducer } from './profile';
import { authReducer } from './auth';

const makeStore = () =>
  configureStore({
    reducer: {
      randomData: randomDataReducer,
      profile: profileReducer,
      auth: authReducer
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const store = makeStore;
