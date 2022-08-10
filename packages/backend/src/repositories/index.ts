import type { PrismaClient } from '@prisma/client';
import { RandomDataRepository } from './random-data';
import { UserRepository } from './user';
import { MailerRepository } from './mailer';

export const initRepositories = (prismaClient: PrismaClient) => ({
  randomDataRepository: new RandomDataRepository(),
  userRepository: new UserRepository(prismaClient),
  mailerRepository: new MailerRepository(),
});

export type Repositories = ReturnType<typeof initRepositories>;

export { type RandomDataRepository, type UserRepository, type MailerRepository };
