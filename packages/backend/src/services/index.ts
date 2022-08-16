import type { Repositories } from '@repositories';
import { TwilioSMSProvider, BarSMSProvider } from '@providers';
import { getEnv } from '@helpers';
import { SendInBlueEmailProvider } from 'providers/email';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { CategoryService } from './category';
import { AuthService } from './auth';
import { HashService } from './hash';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';
import { EmailService } from './email';
import { S3StorageService } from './s3-storage';

export const initServices = (repositories: Repositories) => {
  const hashService: HashService = new HashService();
  const smsProvider =
    getEnv('NODE_ENV') === 'development'
      ? new BarSMSProvider()
      : new TwilioSMSProvider();

  return {
    randomDataService: new RandomDataService(repositories.randomDataRepository),
    userService: new UserService(repositories.userRepository),
    categoryService: new CategoryService(repositories.categoryRepository),
    authService: new AuthService(
      repositories.userRepository,
      repositories.refreshTokenRepository,
      hashService,
    ),
    redisStorageService: new RedisStorageService(),
    smsSenderService: new SMSSenderService(smsProvider),
    emailService: new EmailService(new SendInBlueEmailProvider()),
    s3StorageService: new S3StorageService(),
  };
};

export type Services = ReturnType<typeof initServices>;

export {
  type RandomDataService,
  type UserService,
  type CategoryService,
  type AuthService,
  type HashService,
};
