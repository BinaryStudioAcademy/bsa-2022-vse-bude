import type { ProductRepository } from '@repositories';
import type { Product } from '@prisma/client';
import { auctionJobName } from '@helpers';
import schedule from 'node-schedule';
import { AuctionNotificationsCommand } from '../commands/auction-notifications';

export const initAuctionJobs = (productRepository: ProductRepository) => {
  productRepository.getAllActiveLots().then((activeAuctions: Product[]) => {
    for (const activeLot of activeAuctions) {
      createAuctionJob(activeLot);
    }
  });
};

export const createAuctionJob = (product: Product) => {
  const auctionNotifications = new AuctionNotificationsCommand(product);
  schedule.scheduleJob(
    auctionJobName(product.id),
    product.endDate,
    auctionNotifications.execute,
  );
};

export const updateAuctionJob = (product: Product) => {
  deleteAuctionJob(product.id);
  createAuctionJob(product);
};

export const deleteAuctionJob = (prodUuid: string) => {
  schedule.cancelJob(auctionJobName(prodUuid));
};
