import type { PrismaClient } from '@prisma/client';
import { RandomDataRepository } from './random-data';
import { UserRepository } from './user';
import { CategoryRepository } from './category';
import { ProductRepository } from './product';
import { RefreshTokenRepository } from './refresh-token';
import { NewsRepository } from './news';

export const initRepositories = (prismaClient: PrismaClient) => ({
  randomDataRepository: new RandomDataRepository(),
  userRepository: new UserRepository(prismaClient),
  categoryRepository: new CategoryRepository(prismaClient),
  productRepository: new ProductRepository(prismaClient),
  newsRepository: new NewsRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type RandomDataRepository,
  type UserRepository,
  type RefreshTokenRepository,
  type CategoryRepository,
  type ProductRepository,
  type NewsRepository,
};
