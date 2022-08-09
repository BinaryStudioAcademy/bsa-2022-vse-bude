import type { Chat, Product } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeChat = async (
  amountOfRecords: number,
  existingProducts: Product[],
) => {
  const records: Chat[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const productIndex = i % existingProducts.length;
    const productId = existingProducts.at(productIndex)?.id;
    if (!productId) {
      continue;
    }

    const record: Chat = {
      id: faker.datatype.uuid(),
      title: faker.commerce.product(),
      productId: productId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      deletedAt: null,
    };

    records.push(record);
  }

  return records;
};
