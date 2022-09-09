import type { User, UserSettings } from '@prisma/client';
import { Languages, Themes } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeUserSettings = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingUsersSettings: UserSettings[],
): Promise<UserSettings[]> => {
  const records: UserSettings[] = [];

  overal: for (let i = 0; i < amountOfRecords; i++) {
    const userId = existingUsers.at(i)?.id;
    if (!userId) {
      continue;
    }

    for (const settings of existingUsersSettings) {
      if (settings.userId === userId) {
        continue overal;
      }
    }

    const record: UserSettings = {
      id: faker.datatype.uuid(),
      language: Languages.UA,
      theme: Themes.LIGHT,
      enableEmailNotifications: true,
      userId: userId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
