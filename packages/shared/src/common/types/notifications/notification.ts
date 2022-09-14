export enum NotificationType {
  PRODUCT_SOLD = 'PRODUCT_SOLD',
  AUCTION_ENDED = 'AUCTION_ENDED',
  OUTBID = 'OUTBID',
  BID_PLACED = 'BID_PLACED',
  INFO = 'INFO',
}

export interface NotificationDto {
  id: string;
  userId: string;
  productId?: string;
  type: NotificationType;
  title: string;
  description: string;
  link?: string;
  viewed: boolean;
}
