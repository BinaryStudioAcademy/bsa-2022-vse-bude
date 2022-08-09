import type { PrismaClient, User, UserSettings } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { fakeUserSettings } from './data/userSettings';

export const seedUserSettings = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingUsersSettings = await prismaClient.userSettings.findMany();

  //check if all exists
  if (existingUsers.length === existingUsersSettings.length) {
    return;
  }

  //clear records
  await prismaClient.userSettings.deleteMany({});

  //create new
  const data: UserSettings[] = await fakeUserSettings(
    USERS_NUMBER,
    existingUsers,
  );
  await prismaClient.userSettings.createMany({ data: data });
};
