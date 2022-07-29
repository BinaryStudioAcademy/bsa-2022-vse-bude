import { configureStore } from '@reduxjs/toolkit';
import { randomDataReducer } from './random-data';

const store = configureStore({
  reducer: {
    randomData: randomDataReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
