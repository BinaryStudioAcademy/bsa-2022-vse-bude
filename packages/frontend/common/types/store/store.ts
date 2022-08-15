import type { RandomDataState } from 'store/random-data';
import type { ProfileState } from 'store/profile';

export interface RootState {
  randomData: RandomDataState;
  profile: ProfileState;
}
