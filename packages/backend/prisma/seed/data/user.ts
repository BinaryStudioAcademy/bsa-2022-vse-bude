import type { User } from '@prisma/client';
import { Role } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { HashService } from './../../../src/services/hash';

export const fakeUsers = async (amountOfRecords: number): Promise<User[]> => {
  const hashService = new HashService();
  const records: User[] = [];

  for (let i = 0; i < amountOfRecords; i++) {
    const record: User = {
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
      phone: faker.phone.number('+380 ## ### ####'),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      role: Role.USER,
      createdAt: faker.date.past(),
      passwordHash: hashService.generateHash('test'),
      phoneVerified: true,
      emailVerified: true,
      updatedAt: faker.date.recent(),
    };

    records.push(record);
  }

  return records;
};
