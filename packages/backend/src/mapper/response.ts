import type { AuthTokenData } from '@types';
import type { AuthResponse } from '@vse-bude/shared';
import type { User } from '@prisma/client';
import { userMap } from './user';

export const authResponseMap = (
  tokens: AuthTokenData,
  userData: User,
): AuthResponse => ({
  accessToken: tokens.accessToken,
  refreshToken: tokens.refreshToken,
  accessExpiresAt: tokens.accessExpiresAt,
  user: userMap(userData),
});
