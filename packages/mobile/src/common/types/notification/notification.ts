import { NotificationType } from '~/common/enums/enums';

export type ShowNotificationParams = {
  type: NotificationType;
  title: string;
  message: string;
};
