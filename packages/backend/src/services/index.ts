import type { Repositories } from '@repositories';
import {
  TwilioSMSProvider,
  BarSMSProvider,
  SendInBlueEmailProvider,
} from '@providers';
import { isProduction } from '@helpers';
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
import { EmailService } from './email';
import { UserProfileService } from './profile';
import { BidService } from './bid';
import { MyListService } from './my-list';

export const initServices = (repositories: Repositories): any => {
  const hashService: HashService = new HashService();
  const redisService: RedisStorageService = new RedisStorageService(
    isProduction,
  );

  const smsProvider = isProduction
    ? new TwilioSMSProvider()
    : new BarSMSProvider();
  const smsService = new SMSSenderService(smsProvider);

  const emailProvider = new SendInBlueEmailProvider();
  const emailService = new EmailService(emailProvider);

  const s3StorageService = new S3StorageService();

  const verifyService: VerifyService = new VerifyService(
    repositories.userRepository,
    redisService,
    smsService,
    emailService,
  );

  return {
    categoryService: new CategoryService(repositories.categoryRepository),
    productService: new ProductService(
      repositories.productRepository,
      verifyService,
      s3StorageService,
      repositories.bidRepository,
    ),
    newsService: new NewsService(repositories.newsRepository),
    healthService: new HealthService(repositories.healthRepository),
    profileService: new UserProfileService({
      userProfileRepository: repositories.profileRepository,
      hashService,
      storageService: s3StorageService,
    }),
    authService: new AuthService(
      repositories.userRepository,
      repositories.refreshTokenRepository,
      hashService,
      verifyService,
      redisService,
      emailService,
    ),
    redisStorageService: redisService,
    smsSenderService: smsService,
    emailService: emailService,
    s3StorageService,
    verifyService: verifyService,
    bidService: new BidService(
      repositories.bidRepository,
      repositories.productRepository,
    ),
    myListService: new MyListService({
      myListRepository: repositories.myListRepository,
    }),
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
  type BidService,
  type S3StorageService,
  type MyListService,
};
