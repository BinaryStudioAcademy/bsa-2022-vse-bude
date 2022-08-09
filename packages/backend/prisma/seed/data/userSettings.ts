import type { User, UserSettings } from '@prisma/client';
import { Languages, Themes } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeUserSettings = async (
  amountOfRecords: number,
  existingUsers: User[],
) => {
  const records: UserSettings[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userId = existingUsers.at(i)?.id;
    if (!userId) {
      continue;
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
