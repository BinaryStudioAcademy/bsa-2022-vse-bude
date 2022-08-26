import type { PrismaClient } from '@prisma/client';
import { UserRepository } from './user';
import { CategoryRepository } from './category';
import { ProductRepository } from './product';
import { RefreshTokenRepository } from './refresh-token';
import { NewsRepository } from './news';
import { HealthRepository } from './health';
import { UserAccountRepository } from './account';

export const initRepositories = (prismaClient: PrismaClient) => ({
  userRepository: new UserRepository(prismaClient),
  accountRepository: new UserAccountRepository(prismaClient),
  categoryRepository: new CategoryRepository(prismaClient),
  productRepository: new ProductRepository(prismaClient),
  newsRepository: new NewsRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
  healthRepository: new HealthRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type UserRepository,
  type UserAccountRepository,
  type RefreshTokenRepository,
  type CategoryRepository,
  type ProductRepository,
  type NewsRepository,
  type HealthRepository,
};
