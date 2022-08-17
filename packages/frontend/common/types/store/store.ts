import type { ProfileState } from 'store/profile';
import type { AuthState } from 'store/auth';

export interface RootState {
  profile: ProfileState;
  auth: AuthState;
}
