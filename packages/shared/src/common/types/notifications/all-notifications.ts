import type { NotificationDto } from './notification';

export interface AllNotificationsResponse {
  notifications: NotificationDto[];
  count: number;
  countOfUnread: number;
}
