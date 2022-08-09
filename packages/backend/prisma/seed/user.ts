import type { PrismaClient, User } from '@prisma/client';
import { fakeUsers } from './data/users';
import { USERS_NUMBER } from './config';

export const seedUsers = async (prismaClient: PrismaClient) => {
  const existingUsers = await prismaClient.user.findMany();
  const howManyToCreate = USERS_NUMBER - existingUsers.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const users: User[] = await fakeUsers(howManyToCreate);
  await prismaClient.user.createMany({ data: users });
};
