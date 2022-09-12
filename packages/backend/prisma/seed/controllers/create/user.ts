import type { PrismaClient, User } from '@prisma/client';
import { fakeUsers } from '../../data/user';
import { USERS_NUMBER, USER_FILE_NAME } from '../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedUsers = async (prismaClient: PrismaClient): Promise<void> => {
  const existingUsers = await prismaClient.user.findMany();
  const howManyToCreate = USERS_NUMBER - existingUsers.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: User[] = await fakeUsers(howManyToCreate);

  writeFile(USER_FILE_NAME, data);

  await prismaClient.user.createMany({ data: data });
};
