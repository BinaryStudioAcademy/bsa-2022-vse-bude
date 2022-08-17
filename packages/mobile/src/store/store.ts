import { configureStore } from '@reduxjs/toolkit';
import { storage, authApi } from '~/services/services';
import { rootReducer } from './root-reducer';

const createDebugger = require('redux-flipper').default;

const extraArgument = {
  storage,
  authApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return __DEV__
      ? getDefaultMiddleware({
          thunk: {
            extraArgument,
          },
        }).concat(createDebugger())
      : getDefaultMiddleware({
          thunk: {
            extraArgument,
          },
        });
  },
});

export { extraArgument, store };
