import type { NotificationDto } from './notification';

export interface AllNotificationsDto {
  notifications: NotificationDto[];
  count: number;
}
