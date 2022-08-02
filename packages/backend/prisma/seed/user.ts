import type { PrismaClient } from '@prisma/client';
import { users } from './data';

export const seedUsers = async (prismaClient: PrismaClient) => {
  await prismaClient.user.createMany({
    data: users,
  });
};
