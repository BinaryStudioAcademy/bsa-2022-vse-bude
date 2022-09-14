import type {
  NotificationQuery,
  CreateNotificationDto,
} from '@vse-bude/shared';
import { NOTIFICATIONS_FILTER } from '@vse-bude/shared';
import type { PrismaClient, Notification } from '@prisma/client';

export class NotificationRepository {
  private readonly _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public async getAll(
    userId: string,
    query: NotificationQuery,
  ): Promise<[Notification[], number]> {
    const {
      limit = NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
      from = NOTIFICATIONS_FILTER.NOTIFICATIONS_FROM_DEFAULT,
      viewed,
    } = query;

    const viewedValue = viewed ? viewed === 'true' : undefined;

    return this._dbClient.$transaction([
      this._dbClient.notification.findMany({
        take: +limit,
        skip: +from,
        where: {
          viewed: viewedValue,
        },
      }),
      this._dbClient.notification.count({
        where: {
          viewed: viewedValue,
        },
      }),
    ]);
  }

  public createNotification(
    notification: CreateNotificationDto,
  ): Promise<Notification> {
    return this._dbClient.notification.create({
      data: {
        ...notification,
      },
    });
  }
}
