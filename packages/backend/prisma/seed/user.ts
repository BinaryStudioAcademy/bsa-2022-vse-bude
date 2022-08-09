import type { PrismaClient, User } from '@prisma/client';
import { fakeUsers } from './data/users';
import { USERS_NUMBER } from './config';

export const seedUsers = async (prismaClient: PrismaClient) => {
  const addUsers = async () => {
    const users: User[] = await fakeUsers(USERS_NUMBER);
    await prismaClient.user.createMany({ data: users });
  };

  addUsers();
};
