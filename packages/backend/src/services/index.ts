import type { Repositories } from '@repositories';
import { TwilioSMSProvider, BarSMSProvider } from '@providers';
import { getEnv } from '@helpers';
import { SendInBlueEmailProvider } from 'providers/email';
import { UserService } from './user';
import { AuthService } from './auth';
import { HashService } from './hash';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';
import { EmailService } from './email';
import { S3StorageService } from './s3-storage';
import { VerifyService } from './verify';

export const initServices = (repositories: Repositories) => {
  const hashService: HashService = new HashService();
  const redisService: RedisStorageService = new RedisStorageService();

  const smsProvider =
    getEnv('NODE_ENV') === 'development'
      ? new BarSMSProvider()
      : new TwilioSMSProvider();
  const verifyService: VerifyService = new VerifyService(
    repositories.userRepository,
    redisService,
  );

  return {
    userService: new UserService(repositories.userRepository),
    authService: new AuthService(
      repositories.userRepository,
      repositories.refreshTokenRepository,
      hashService,
      verifyService,
    ),
    redisStorageService: redisService,
    smsSenderService: new SMSSenderService(smsProvider),
    emailService: new EmailService(new SendInBlueEmailProvider()),
    s3StorageService: new S3StorageService(),
    verifyService: verifyService,
  };
};

export type Services = ReturnType<typeof initServices>;

export {
  type UserService,
  type AuthService,
  type HashService,
  type VerifyService,
};
