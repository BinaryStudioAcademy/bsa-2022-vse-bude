import type { Category } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Categories } from '../Categories';

export const fakeCategory = async (amountOfRecords: number) => {
  const records: Category[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const title = Categories.at(i);
    if (!title) {
      continue;
    }
    const record: Category = {
      id: faker.datatype.uuid(),
      title: title,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
