import type {
  NotificationQuery,
  CreateNotificationDto,
} from '@vse-bude/shared';
import { Order } from '@vse-bude/shared';
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
  ): Promise<[Notification[], number, number]> {
    const {
      limit = NOTIFICATIONS_FILTER.NOTIFICATIONS_LIMIT_DEFAULT,
      from = NOTIFICATIONS_FILTER.NOTIFICATIONS_FROM_DEFAULT,
      viewed,
    } = query;

    return this._dbClient.$transaction([
      this._dbClient.notification.findMany({
        take: +limit,
        skip: +from,
        where: {
          viewed,
          userId,
        },
        orderBy: {
          createdAt: Order.DESC,
        },
      }),
      this._dbClient.notification.count({
        where: {
          viewed,
          userId,
        },
      }),

      this._dbClient.notification.count({
        where: {
          viewed: false,
          userId,
        },
      }),
    ]);
  }

  public create(notification: CreateNotificationDto): Promise<Notification> {
    return this._dbClient.notification.create({
      data: {
        ...notification,
      },
    });
  }

  public async setAsViewed(id: string, userId: string): Promise<Notification> {
    await this._dbClient.notification.updateMany({
      where: {
        id,
        userId,
      },
      data: {
        viewed: true,
      },
    });

    return this._dbClient.notification.findUnique({
      where: {
        id,
      },
    });
  }
}
