import type { PrismaClient } from '@prisma/client';
import { RandomDataRepository } from './random-data';
import { UserRepository } from './user';
import { RefreshTokenRepository } from './refresh-token';

export const initRepositories = (prismaClient: PrismaClient) => ({
  randomDataRepository: new RandomDataRepository(),
  userRepository: new UserRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type RandomDataRepository,
  type UserRepository,
  type RefreshTokenRepository,
};
