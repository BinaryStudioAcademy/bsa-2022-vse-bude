import type { News } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeNews = async (amountOfRecords: number): Promise<News[]> => {
  const records: News[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const record: News = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(1),
      description: faker.lorem.sentence(1),
      content: faker.lorem.paragraph(2),
      image: faker.image.business(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
