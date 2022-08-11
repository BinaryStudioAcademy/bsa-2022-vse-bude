import type { PrismaClient, User, UserSettings } from '@prisma/client';
import { USERS_NUMBER } from '../config/config';
import { fakeUserSettings } from '../data/userSettings';

export const seedUserSettings = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingUsersSettings = await prismaClient.userSettings.findMany();

  if (existingUsersSettings.length >= existingUsers.length) {
    return;
  }

  const data: UserSettings[] = await fakeUserSettings(
    USERS_NUMBER,
    existingUsers,
    existingUsersSettings,
  );
  await prismaClient.userSettings.createMany({ data: data });
};
