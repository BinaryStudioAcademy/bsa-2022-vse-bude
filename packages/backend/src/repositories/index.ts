import type { PrismaClient } from '@prisma/client';
import { UserRepository } from './user';
import { RefreshTokenRepository } from './refresh-token';

export const initRepositories = (prismaClient: PrismaClient) => ({
  userRepository: new UserRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export { type UserRepository, type RefreshTokenRepository };
