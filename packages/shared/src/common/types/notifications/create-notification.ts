import type { NotificationType } from './notification';

export interface CreateNotificationDto {
  type: NotificationType;
  userId: string;
  title: string;
  description: string;
  link?: string;
  productId?: string;
  viewed?: boolean;
}
