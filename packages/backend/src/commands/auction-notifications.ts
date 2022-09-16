import { NotificationType } from '@vse-bude/shared';
import { isProduction, logger } from '@helpers';
import { lang } from '@lang';
import type {
  ProductRepository as ProductRepositoryType,
  UserRepository as UserRepositoryType,
  BidRepository as BidRepositoryType,
} from '@repositories';
import type { Product, User } from '@prisma/client';
import { emailService } from '@services';
import { ProductRepository } from '../repositories/product';
import { UserRepository } from '../repositories/user';
import { BidRepository } from '../repositories/bid';
import { NotificationRepository } from '../repositories/notification';
import { prismaClient as database } from '../data/db';
import { ProductNotSoldBuilder } from '../email/product-not-sold-builder';
import { ProductSoldAuthorBuilder } from '../email/product-sold-author-builder';
import { ProductSoldWinnerBuilder } from '../email/product-sold-winner-builder';
import { NotificationService } from '../services/notification';
import { BaseCommand } from './base-command';

export class AuctionNotificationsCommand extends BaseCommand {
  private _prodRepository: ProductRepositoryType;

  private _userRepository: UserRepositoryType;

  private _bidRepository: BidRepositoryType;

  private _notificationService: NotificationService;

  private limit = 20;

  private _product: Product;

  constructor(product: Product) {
    super();
    this._product = product;
    this.commandAlias = 'auction-notifications';
    this._prodRepository = new ProductRepository(database);
    this._userRepository = new UserRepository(database);
    this._bidRepository = new BidRepository(database);
    this._notificationService = new NotificationService(
      new NotificationRepository(database),
    );
  }

  async execute(): Promise<void> {
    logger.log(`Command ${this.commandAlias} started!`);
    try {
      await this.handleParticipants(this._product);
      await this._prodRepository.markProductNotified(this._product.id);

      const bidders = await this._bidRepository.getBidders(this._product.id);

      for (const bidder of bidders) {
        await this._notificationService.create({
          type: NotificationType.AUCTION_ENDED,
          userId: bidder,
          title: lang('notifications:title.AUCTION_ENDED', {}, 'en'),
          description: lang(
            'notifications:description.AUCTION_ENDED',
            {},
            'en',
          ),
          productId: this._product.id,
        });
      }

      await this._notificationService.create({
        type: NotificationType.AUCTION_ENDED,
        userId: this._product.authorId,
        title: lang('notifications:title.AUCTION_ENDED', {}, 'en'),
        description: lang('notifications:description.AUCTION_ENDED', {}, 'en'),
        productId: this._product.id,
      });
    } catch (e) {
      logger.error(`Command ${this.commandAlias} failed with error!`);
      logger.error(e);
    }
  }

  private async handleParticipants(productItem: Product): Promise<void> {
    const author = await this._userRepository.getById(productItem.authorId);
    const lastBid = await this._bidRepository.lastProductBid(productItem.id);
    if (!lastBid) {
      await this.handleFailureNotifications({
        user: author,
        product: productItem,
      });

      return;
    }
    const winner = await this._userRepository.getById(lastBid.bidderId);

    await this.handleSuccessNotifications({
      author,
      product: productItem,
      winner,
    });
  }

  private async handleSuccessNotifications({
    author,
    winner,
    product,
  }: {
    author: User;
    winner: User;
    product: Product;
  }): Promise<void> {
    const authorMail = new ProductSoldAuthorBuilder(emailService);
    const authorText = authorMail.buildText(author, product);

    const winnerMail = new ProductSoldWinnerBuilder(emailService);
    const winnerText = winnerMail.buildText(winner, product);

    await authorMail.setText(authorText).send();

    await winnerMail.setText(winnerText).send();

    if (!isProduction) {
      console.log(winnerText);
      console.log(authorText);
    }
  }

  private async handleFailureNotifications({
    user,
    product,
  }: {
    user: User;
    product: Product;
  }): Promise<void> {
    const mail = new ProductNotSoldBuilder(emailService);
    const mailText = mail.buildText(user, product);
    await mail.setText(mailText).send();

    if (!isProduction) {
      console.log(mailText);
    }
  }
}
