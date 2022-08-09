import type { Address, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeAddress = async (
  amountOfRecords: number,
  existingUsers: User[],
) => {
  const records: Address[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const userId = existingUsers.at(i)?.id;
    if (!userId) {
      continue;
    }

    const record: Address = {
      id: faker.datatype.uuid(),
      country: faker.address.county(),
      region: faker.address.state(),
      city: faker.address.city(),
      address: faker.address.street(),
      zip: faker.address.zipCode(),
      novaPoshtaRef: 'novaPoshtaRef',
      userId: userId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
