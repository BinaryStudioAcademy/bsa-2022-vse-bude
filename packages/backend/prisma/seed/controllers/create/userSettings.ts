import type { PrismaClient, User, UserSettings } from '@prisma/client';
import { USERS_NUMBER, USER_SETTINGS_FILE_NAME } from '../../config/config';
import { fakeUserSettings } from '../../data/userSettings';
import { writeFile } from './../../helpers/wtireFile';

export const seedUserSettings = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
): Promise<void> => {
  const existingUsersSettings = await prismaClient.userSettings.findMany();

  if (existingUsersSettings.length >= existingUsers.length) {
    return;
  }

  const data: UserSettings[] = await fakeUserSettings(
    USERS_NUMBER,
    existingUsers,
    existingUsersSettings,
  );

  writeFile(USER_SETTINGS_FILE_NAME, data);

  await prismaClient.userSettings.createMany({ data: data });
};
