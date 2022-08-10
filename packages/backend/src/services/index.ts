import type { Repositories } from '@repositories';
import { TwilioSMSProvider } from '@providers';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { AuthService } from './auth';
import { HashService } from './hash';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';

const hashService: HashService = new HashService();

const smsProvider = new TwilioSMSProvider();

export const initServices = (repositories: Repositories) => ({
  randomDataService: new RandomDataService(repositories.randomDataRepository),
  userService: new UserService(repositories.userRepository),
  authService: new AuthService(
    repositories.userRepository,
    repositories.refreshTokenRepository,
    hashService,
  ),
  redisStorageService: new RedisStorageService(),
  smsSenderService: new SMSSenderService(smsProvider),
});

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService, type AuthService };
