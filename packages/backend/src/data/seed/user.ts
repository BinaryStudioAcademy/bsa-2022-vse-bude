import type { DBClient } from '@helpers';
import { users } from './data';

export const seedUsers = async (dbClient: DBClient) => {
  await dbClient.user.createMany({
    data: users,
  });
};
