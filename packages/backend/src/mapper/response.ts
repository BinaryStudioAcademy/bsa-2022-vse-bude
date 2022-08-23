import type { AuthTokenData } from '@types';
import type { AuthResponse } from '@vse-bude/shared';
import type { User } from '@prisma/client';

export const authResponseMap = (
  tokens: AuthTokenData,
  userData: User,
): AuthResponse => ({
  accessToken: tokens.accessToken,
  refreshToken: tokens.refreshToken,
  accessExpiresAt: tokens.accessExpiresAt,
  user: {
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
    email: userData.email,
    avatar: userData.avatar,
    role: userData.role,
    createdAt: userData.createdAt.getTime(),
    updatedAt: userData.updatedAt.getTime(),
    phoneVerified: userData.phoneVerified,
    emailVerified: userData.emailVerified,
  },
});
