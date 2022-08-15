import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { randomDataReducer } from './random-data';
import { profileReducer } from './profile';

const makeStore = () =>
  configureStore({
    reducer: {
      randomData: randomDataReducer,
      profile: profileReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const store = makeStore;
