import type { NotificationRepository } from '@repositories';
import type { NotificationQuery } from '@vse-bude/shared';
import type { AllNotificationsResponse } from '@types';

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

    return { notifications, count };
  }
}
