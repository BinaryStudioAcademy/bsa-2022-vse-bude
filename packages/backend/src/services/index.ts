import type { Repositories } from '@repositories';
import { TwilioSMSProvider } from '@providers';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';

export function initServices(repositories: Repositories) {
  const smsProvider = new TwilioSMSProvider();

  return {
    randomDataService: new RandomDataService(repositories.randomDataRepository),
    userService: new UserService(repositories.userRepository),
    redisStorageService: new RedisStorageService(),
    smsSenderService: new SMSSenderService(smsProvider),
  };
}

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService };
