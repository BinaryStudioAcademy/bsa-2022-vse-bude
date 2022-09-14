import type { Category } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeCategory = async (
  existingCategories: Category[],
  Categories: string[],
): Promise<Category[]> => {
  const records: Category[] = [];

  overal: for (let i = 0; i < Categories.length; i++) {
    const title = Categories.at(i);
    if (!title) {
      continue;
    }

    for (const recs of existingCategories) {
      if (recs.title === title) {
        continue overal;
      }
    }

    const record: Category = {
      id: faker.datatype.uuid(),
      title: title,
      image: faker.image.fashion(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
