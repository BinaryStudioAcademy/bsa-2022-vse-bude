import { Environment } from '@vse-bude/shared';
import type { Repositories } from '@repositories';
import { TwilioSMSProvider, BarSMSProvider } from '@providers';
import { getEnv } from '@helpers';
import { SendInBlueEmailProvider } from '../providers/email';
import { CategoryService } from './category';
import { ProductService } from './product';
import { AuthService } from './auth';
import { HashService } from './hash';
import { RedisStorageService } from './redis-storage';
import { SMSSenderService } from './sms';
import { S3StorageService } from './s3-storage';
import { VerifyService } from './verify';
import { NewsService } from './news';
import { HealthService } from './health';
import { UserProfileService } from './profile';
import { EmailService } from './email/email';

export const emailService = new EmailService(new SendInBlueEmailProvider());

export const initServices = (repositories: Repositories) => {
  const isProduction = getEnv('NODE_ENV') === Environment.PRODUCTION;

  const hashService: HashService = new HashService();
  const redisService: RedisStorageService = new RedisStorageService(
    isProduction,
  );

  const smsProvider = isProduction
    ? new TwilioSMSProvider()
    : new BarSMSProvider();

  const smsService = new SMSSenderService(smsProvider);

  const verifyService: VerifyService = new VerifyService(
    repositories.userRepository,
    redisService,
    smsService,
    emailService,
  );

  return {
    categoryService: new CategoryService(repositories.categoryRepository),
    productService: new ProductService(repositories.productRepository),
    newsService: new NewsService(repositories.newsRepository),
    healthService: new HealthService(repositories.healthRepository),
    profileService: new UserProfileService(repositories.profileRepository),
    authService: new AuthService(
      repositories.userRepository,
      repositories.refreshTokenRepository,
      hashService,
      verifyService,
      redisService,
    ),
    redisStorageService: redisService,
    smsSenderService: smsService,
    emailService: emailService,
    s3StorageService: new S3StorageService(),
    verifyService: verifyService,
  };
};

export type Services = ReturnType<typeof initServices>;

export {
  type CategoryService,
  type ProductService,
  type AuthService,
  type HashService,
  type VerifyService,
  type NewsService,
  type HealthService,
  type UserProfileService,
  type EmailService,
};
