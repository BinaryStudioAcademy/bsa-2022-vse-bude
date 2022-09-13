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

  deleteAuctionJob(prodUuid: string): void {
    schedule.cancelJob(auctionJobName(prodUuid));
  }

  updateAuctionJob(product: Product): void {
    this.deleteAuctionJob(product.id);
    this.createAuctionJob(product);
  }

  createAuctionJob(product: Product): void {
    const auctionNotifications = new AuctionNotificationsCommand(product);
    schedule.scheduleJob(
      auctionJobName(product.id),
      product.endDate,
      async () => await auctionNotifications.execute(),
    );
  }

  initAuctionJobs(): void {
    this._productRepository
      .getActiveAuctionsLots()
      .then((activeAuctions: Product[]) => {
        for (const activeLot of activeAuctions) {
          this.createAuctionJob(activeLot);
        }
      });
  }
}
