import type { Category } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeCategory = async (amountOfRecords: number) => {
  const records: Category[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const record: Category = {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
