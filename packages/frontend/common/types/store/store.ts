import type { RandomDataState } from 'store/random-data';
import type { ProfileState } from 'store/profile';
import { AuthState } from 'store/auth';

export interface RootState {
  randomData: RandomDataState;
  profile: ProfileState;
  auth: AuthState;
}
