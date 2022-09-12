import type { Address, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeAddress = async (
  amountOfRecords: number,
  existingUsers: User[],
  existingAddress: Address[],
): Promise<Address[]> => {
  const records: Address[] = [];

  overal: for (let i = 0; i < amountOfRecords; i++) {
    const userId = existingUsers.at(i)?.id;
    if (!userId) {
      continue;
    }

    for (const address of existingAddress) {
      if (address.userId === userId) {
        continue overal;
      }
    }

    const record: Address = {
      id: faker.datatype.uuid(),
      country: faker.address.county(),
      region: faker.address.state(),
      city: faker.address.city(),
      address: faker.address.street(),
      zip: faker.address.zipCode(),
      deliveryData: faker.address.direction(),
      userId: userId,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
