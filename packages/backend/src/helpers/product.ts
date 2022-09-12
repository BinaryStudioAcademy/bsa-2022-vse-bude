export const auctionJobName = (productUuid: string): string =>
  `auction-cronjob-${productUuid}`;
