import Toast from 'react-native-toast-message';
import { NotificationType } from '~/common/enums/enums';
import { ShowNotificationParams } from '~/common/types/types';

class NotificationService {
  public [NotificationType.ERROR](message: string, title = 'Error'): void {
    this.showNotification({
      type: NotificationType.ERROR,
      title,
      message,
    });
  }

  public [NotificationType.INFO](message: string, title = 'Information'): void {
    this.showNotification({
      type: NotificationType.INFO,
      title,
      message,
    });
  }

  public [NotificationType.SUCCESS](message: string, title = 'Success'): void {
    this.showNotification({
      type: NotificationType.SUCCESS,
      title,
      message,
    });
  }

  private showNotification(props: ShowNotificationParams): void {
    Toast.show({
      type: props.type,
      text1: props.title,
      text2: props.message,
      topOffset: 70,
    });
  }
}

export { NotificationService };
