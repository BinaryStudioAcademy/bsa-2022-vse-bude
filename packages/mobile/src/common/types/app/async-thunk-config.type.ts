import { extraArgument } from '~/store/store';
import { AppDispatch } from './app-dispatch.type';
import { RootState } from './root-state.type';

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};

export { type AsyncThunkConfig };
