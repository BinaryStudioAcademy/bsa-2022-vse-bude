import type { Repositories } from '@repositories';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';

export const initServices = (repositories: Repositories) => ({
  randomDataService: new RandomDataService(repositories.randomDataRepository),
  userService: new UserService(repositories.userRepository),
  redisStorageService: new RedisStorageService(),
  smsSenderService: new SMSSenderService(),
});

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService };

export * from './sms';
