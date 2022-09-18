import type {
  UserRepository,
  RefreshTokenRepository,
  CategoryRepository,
  ProductRepository,
  NewsRepository,
  HealthRepository,
  UserProfileRepository,
  BidRepository,
  MyListRepository,
  OrderRepository,
  NotificationRepository,
} from '@repositories';

import type {
  CategoryService,
  ProductService,
  AuthService,
  VerifyService,
  NewsService,
  HealthService,
  UserProfileService,
  EmailService,
  BidService,
  S3StorageService,
  MyListService,
  OrderService,
  PaymentService,
  AuctionScheduler,
  NotificationService,
  SMSSenderService,
  RedisStorageService,
} from '@services';

export type ServicesInit = {
  categoryService: CategoryService;
  productService: ProductService;
  newsService: NewsService;
  healthService: HealthService;
  profileService: UserProfileService;
  authService: AuthService;
  redisStorageService: RedisStorageService;
  smsSenderService: SMSSenderService;
  emailService: EmailService;
  s3StorageService: S3StorageService;
  verifyService: VerifyService;
  bidService: BidService;
  myListService: MyListService;
  orderService: OrderService;
  paymentService: PaymentService;
  auctionScheduler: AuctionScheduler;
  notificationService: NotificationService;
};

export type RepositoriesInit = {
  userRepository: UserRepository;
  categoryRepository: CategoryRepository;
  productRepository: ProductRepository;
  newsRepository: NewsRepository;
  refreshTokenRepository: RefreshTokenRepository;
  healthRepository: HealthRepository;
  profileRepository: UserProfileRepository;
  bidRepository: BidRepository;
  myListRepository: MyListRepository;
  orderRepository: OrderRepository;
  notificationRepository: NotificationRepository;
};
