import type { AuctionPermissionsResponse } from '@vse-bude/shared';

export const auctionPermissionsMapper = (
  isAbleToLeave: boolean,
): AuctionPermissionsResponse => ({
  isAbleToLeaveAuction: isAbleToLeave,
});
