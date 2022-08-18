import { configureStore } from '@reduxjs/toolkit';
import { storage, authApi } from '~/services/services';
import { rootReducer } from './root-reducer';

const extraArgument = {
  storage,
  authApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });

    /* eslint-disable */
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      defaultMiddleware.concat(createDebugger());
    }

    return defaultMiddleware;
  },
});

export { extraArgument, store };
