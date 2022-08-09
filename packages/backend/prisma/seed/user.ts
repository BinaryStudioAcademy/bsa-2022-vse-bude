import type { PrismaClient, User } from '@prisma/client';
import { Role } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const seedUsers = async (
  prismaClient: PrismaClient,
  amountOfUsers: number,
) => {
  const users: User[] = [];

  for (let i = 0; i < amountOfUsers; i++) {
    const user: User = {
      id: faker.datatype.uuid(),
      firebaseUid: faker.datatype.uuid(),
      email: faker.internet.email(),
      phone: faker.phone.number('+380 ## ### ####'),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      role: Role.USER,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    users.push(user);
  }

  const addUsers = async () =>
    await prismaClient.user.createMany({ data: users });

  addUsers();
};
