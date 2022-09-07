import { isProduction, logger } from '@helpers';
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
import { prismaClient as database } from '../data/db';
import { ProductNotSoldBuilder } from '../email/product-not-sold-builder';
import { ProductSoldAuthorBuilder } from '../email/product-sold-author-builder';
import { ProductSoldWinnerBuilder } from '../email/product-sold-winner-builder';
import { BaseCommand } from './base-command';

class AuctionNotificationsCommand extends BaseCommand {
  private _prodRepository: ProductRepositoryType;

  private _userRepository: UserRepositoryType;

  private _bidRepository: BidRepositoryType;

  private limit = 20;

  constructor() {
    super();
    this.commandAlias = 'auction-notifications';
    this._prodRepository = new ProductRepository(database);
    this._userRepository = new UserRepository(database);
    this._bidRepository = new BidRepository(database);
  }

  async execute() {
    logger.log(`Command ${this.commandAlias} started!`);
    try {
      const finishedLots = await this.getLots();
      for (const lot of finishedLots) {
        await this.handleParticipants(lot);
        await this._prodRepository.markProductNotified(lot.id);
      }
    } catch (e) {
      logger.error(`Command ${this.commandAlias} failed with error!`);
      logger.error(e);
    }
  }

  private async getLots() {
    const result = [];
    let offset = 0;
    let lots = await this._prodRepository.getFinishedLots(this.limit, offset);
    do {
      lots = await this._prodRepository.getFinishedLots(this.limit, offset);
      result.push(...lots);
      offset += this.limit;
    } while (lots.length === this.limit);

    return result;
  }

  private async handleParticipants(productItem: Product) {
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
  }) {
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
  }) {
    const mail = new ProductNotSoldBuilder(emailService);
    const mailText = mail.buildText(user, product);
    await mail.setText(mailText).send();

    if (!isProduction) {
      console.log(mailText);
    }
  }
}

export const auctionNotificationsCommand = new AuctionNotificationsCommand();
