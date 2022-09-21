import type { Repositories } from '@repositories';
import {
  TwilioSMSProvider,
  BarSMSProvider,
  SendInBlueEmailProvider,
} from '@providers';
import { isProduction } from '@helpers';
import { AuctionScheduler } from '@scheduler';
import type { ServicesInit } from '@types';
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
import { OrderService } from './order';
import { PaymentService } from './payment';
import { NotificationService } from './notification';

const emailProvider = new SendInBlueEmailProvider();
export const emailService = new EmailService(emailProvider);

export const initServices = (repositories: Repositories): ServicesInit => {
  const hashService: HashService = new HashService();
  const redisService: RedisStorageService = new RedisStorageService(
    isProduction,
  );

  const smsProvider = isProduction
    ? new TwilioSMSProvider()
    : new BarSMSProvider();

  const smsService = new SMSSenderService(smsProvider);
  const s3StorageService = new S3StorageService();

  const verifyService: VerifyService = new VerifyService(
    repositories.userRepository,
    redisService,
    smsService,
    emailService,
  );

  const auctionScheduler = new AuctionScheduler(repositories.productRepository);

  const norificationService = new NotificationService(
    repositories.notificationRepository,
  );

  return {
    categoryService: new CategoryService(repositories.categoryRepository),
    productService: new ProductService(
      repositories.productRepository,
      verifyService,
      s3StorageService,
      repositories.bidRepository,
      auctionScheduler,
      norificationService,
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
      norificationService,
    ),
    myListService: new MyListService({
      myListRepository: repositories.myListRepository,
      orderRepository: repositories.orderRepository,
      s3StorageService,
      productRepository: repositories.productRepository,
    }),
    orderService: new OrderService(
      repositories.orderRepository,
      repositories.productRepository,
      verifyService,
    ),
    paymentService: new PaymentService(
      repositories.orderRepository,
      repositories.productRepository,
    ),
    auctionScheduler: auctionScheduler,
    notificationService: norificationService,
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
  type OrderService,
  type PaymentService,
  type AuctionScheduler,
  type NotificationService,
  type SMSSenderService,
  type RedisStorageService,
};
