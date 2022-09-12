import type { PrismaClient, UserSettings } from '@prisma/client';
import { readFileSync } from 'fs';
import { USER_SETTINGS_FILE_NAME } from '../../config/config';

export const updateUserSettings = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${USER_SETTINGS_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: UserSettings[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.userSettings.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.userSettings.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          language: _dataJSON.language,
          theme: _dataJSON.theme,
          enableEmailNotifications: _dataJSON.enableEmailNotifications,
          userId: _dataJSON.userId,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.userSettings.create({ data: _dataJSON });
    }
  }
};
