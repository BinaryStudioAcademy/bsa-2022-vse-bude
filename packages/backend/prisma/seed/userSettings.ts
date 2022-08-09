import type { PrismaClient, UserSettings } from '@prisma/client';
import { USERS_NUMBER } from './config';
import { fakeUserSettings } from './data/userSettings';

export const seedUserSettings = async (prismaClient: PrismaClient) => {
  const existingUsers = await prismaClient.user.findMany();

  const usersSettings: UserSettings[] = await fakeUserSettings(
    USERS_NUMBER,
    existingUsers,
  );
  await prismaClient.userSettings.createMany({ data: usersSettings });
};
