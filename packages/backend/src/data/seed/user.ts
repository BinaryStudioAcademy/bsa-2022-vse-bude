import type { User } from '@prisma/client';
import type { DBClient } from 'helpers';

const users: User[] = [];

export const seedUsers = async (dbClient: DBClient) => {
  dbClient.user.createMany({
    data: users,
  });
};
