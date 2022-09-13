import type { Bid, Product, User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { Decimal } from '@prisma/client/runtime';

export const fakeBid = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingProducts: Product[],
): Promise<Bid[]> => {
  const records: Bid[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userIndex = i % existingUsers.length;
    const userId = existingUsers.at(userIndex)?.id;
    if (!userId) {
      continue;
    }

    const productIndex = i % existingProducts.length;
    const productId = existingProducts.at(productIndex)?.id;
    if (!productId) {
      continue;
    }

    const record: Bid = {
      id: faker.datatype.uuid(),
      bidderId: userId,
      productId: productId,
      price: new Decimal(faker.commerce.price(1000, 100000)),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
