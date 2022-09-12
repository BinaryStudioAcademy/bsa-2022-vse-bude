import type { ProductRepository } from '@repositories';
import type { Product } from '@prisma/client';
import { auctionJobName } from '@helpers';
import schedule from 'node-schedule';
import { AuctionNotificationsCommand } from '../commands/auction-notifications';

export class AuctionScheduler {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  deleteAuctionJob(prodUuid: string) {
    schedule.cancelJob(auctionJobName(prodUuid));
  }

  updateAuctionJob(product: Product) {
    this.deleteAuctionJob(product.id);
    this.createAuctionJob(product);
  }

  createAuctionJob(product: Product) {
    const auctionNotifications = new AuctionNotificationsCommand(product);
    schedule.scheduleJob(
      auctionJobName(product.id),
      product.endDate,
      auctionNotifications.execute,
    );
  }

  initAuctionJobs() {
    this._productRepository
      .getActiveAuctionsLots()
      .then((activeAuctions: Product[]) => {
        for (const activeLot of activeAuctions) {
          this.createAuctionJob(activeLot);
        }
      });
  }
}
