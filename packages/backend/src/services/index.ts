import type { Repositories } from '@repositories';
import { TwilioSMSProvider, BarSMSProvider } from '@providers';
import { getEnv } from '@helpers';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { AuthService } from './auth';
import { HashService } from './hash';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';

export const initServices = (repositories: Repositories) => {
  const hashService: HashService = new HashService();
  const smsProvider =
    getEnv('NODE_ENV') === 'development'
      ? new BarSMSProvider()
      : new TwilioSMSProvider();

  return {
    randomDataService: new RandomDataService(repositories.randomDataRepository),
    userService: new UserService(repositories.userRepository),
    authService: new AuthService(
      repositories.userRepository,
      repositories.refreshTokenRepository,
      hashService,
    ),
    redisStorageService: new RedisStorageService(),
    smsSenderService: new SMSSenderService(smsProvider),
  };
};

export type Services = ReturnType<typeof initServices>;

export {
  type RandomDataService,
  type UserService,
  type AuthService,
  type HashService,
};
