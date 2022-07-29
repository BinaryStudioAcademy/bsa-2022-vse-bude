import type { RootState } from './store';

export type HydrateAction = {
  action: string;
  payload: Partial<RootState>;
};
