import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import { randomDataReducer } from './random-data';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  randomData: randomDataReducer,
  auth: authReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
