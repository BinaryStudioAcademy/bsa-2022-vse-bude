import type { Notification } from '@prisma/client';

export interface AllNotificationsResponse {
  notifications: Notification[];
  count: number;
  countOfUnread: number;
}
