import schedule from 'node-schedule';
import type { ProductRepository } from '@repositories';
import type { Product } from '@prisma/client';
import { AuctionNotificationsCommand } from '../commands/auction-notifications';

export const clearAllJobs = () => {
  const jobsToDelete = Object.keys(schedule.scheduledJobs);
  for (const job of jobsToDelete) {
    schedule.cancelJob(job);
  }
};

export const setJob = (
  id: string,
  utcDate: Date | string,
  callback: () => void,
) => {
  schedule.scheduleJob(id, utcDate, callback);
};

export const initAuctionJobs = (productRepository: ProductRepository) => {
  productRepository.getAllActiveLots().then((activeAuctions: Product[]) => {
    for (const activeLot of activeAuctions) {
      const auctionNotifications = new AuctionNotificationsCommand(activeLot);
      setJob(activeLot.id, activeLot.endDate, auctionNotifications.execute);
    }
  });
};
