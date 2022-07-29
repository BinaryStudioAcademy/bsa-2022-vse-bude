import type { DBClient } from 'helpers/dbClient';
import { RandomDataRepository } from './random-data';
import { UserRepository } from './user';

export const initRepositories = (bdClient: DBClient) => ({
  randomDataRepository: new RandomDataRepository(),
  userRepository: new UserRepository(bdClient),
});

export type Repositories = ReturnType<typeof initRepositories>;
