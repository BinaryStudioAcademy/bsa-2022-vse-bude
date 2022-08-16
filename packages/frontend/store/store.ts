import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { profileReducer } from './profile';
import { authReducer } from './auth';

const makeStore = () =>
  configureStore({
    reducer: {
      profile: profileReducer,
      auth: authReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const store = makeStore;
