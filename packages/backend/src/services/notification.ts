import type { NotificationRepository } from '@repositories';
import type {
  NotificationQuery,
  CreateNotificationDto,
} from '@vse-bude/shared';
import { NotificationType } from '@vse-bude/shared';
import type { AllNotificationsResponse } from '@types';
import type { Notification } from '@prisma/client';
import { lang } from '@lang';
import type { Request } from 'express';

export class NotificationService {
  private _notificationRepository: NotificationRepository;

  constructor(notificationRepository: NotificationRepository) {
    this._notificationRepository = notificationRepository;
  }

  public async getAll(
    userId: string,
    query: NotificationQuery,
  ): Promise<AllNotificationsResponse> {
    const [notifications, count, countOfUnread] =
      await this._notificationRepository.getAll(userId, query);

    notifications.forEach((notification) => this.localize(notification));

    return { notifications, count, countOfUnread };
  }

  public create(notification: CreateNotificationDto): Promise<Notification> {
    return this._notificationRepository.create(notification);
  }

  public async setAsViewed(req: Request): Promise<Notification> {
    const {
      userId,
      params: { id },
    } = req;

    const notification = await this._notificationRepository.setAsViewed(
      id,
      userId,
    );

    return this.localize(notification);
  }

  private localize(notification: Notification): Notification {
    if (notification?.type !== NotificationType.INFO) {
      notification.title =
        lang(`notifications:title.${notification.type}`) || notification.title;
      notification.description =
        lang(`notifications:description.${notification.type}`) ||
        notification.description;
    }

    return notification;
  }
}
