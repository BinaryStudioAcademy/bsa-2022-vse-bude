import type { PrismaClient } from '@prisma/client';
import { RandomDataRepository } from './random-data';
import { UserRepository } from './user';
import { RefreshTokenRepository } from './refresh-token';
import { VerifyRepository } from './verify';

export const initRepositories = (prismaClient: PrismaClient) => ({
  randomDataRepository: new RandomDataRepository(),
  userRepository: new UserRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
  verifyRepository: new VerifyRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type RandomDataRepository,
  type UserRepository,
  type RefreshTokenRepository,
  type VerifyRepository,
};
