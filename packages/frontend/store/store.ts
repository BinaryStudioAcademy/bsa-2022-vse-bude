import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import { randomDataReducer } from './random-data';
import { profileReducer } from './profile';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  randomData: randomDataReducer,
  auth: authReducer,
  profile: profileReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const store = makeStore;
