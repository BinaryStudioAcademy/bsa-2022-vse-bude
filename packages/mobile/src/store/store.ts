import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { storage, authApi } from '~/services/services';

const extraArgument = {
  storage,
  authApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });
  },
});

export { extraArgument, store };
