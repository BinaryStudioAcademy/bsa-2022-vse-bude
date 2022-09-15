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
    const [notifications, count] = await this._notificationRepository.getAll(
      userId,
      query,
    );

    notifications.forEach((notification) => {
      if (notification.type !== NotificationType.INFO) {
        notification.title =
          lang(`notifications:title.${notification.type}`) ||
          notification.title;
        notification.description =
          lang(`notifications:description.${notification.type}`) ||
          notification.description;
      }
    });

    return { notifications, count };
  }

  public createNotification(
    notification: CreateNotificationDto,
  ): Promise<Notification> {
    return this._notificationRepository.createNotification(notification);
  }

  public setNotificationAsViewed(req: Request): Promise<Notification> {
    const {
      userId,
      params: { id },
    } = req;

    return this._notificationRepository.setNotificationAsViewed(id, userId);
  }
}
