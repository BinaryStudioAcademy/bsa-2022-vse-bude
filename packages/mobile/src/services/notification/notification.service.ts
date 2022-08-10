import Toast from 'react-native-toast-message';
import { NotificationType } from '~/common/enums/enums';
import { ShowNotificationParams } from '~/common/types/types';

class Notification {
  public [NotificationType.ERROR](message: string): void {
    this.showNotification({
      type: NotificationType.ERROR,
      title: 'Error',
      message,
    });
  }

  public [NotificationType.INFO](message: string): void {
    this.showNotification({
      type: NotificationType.INFO,
      title: 'Information',
      message,
    });
  }

  public [NotificationType.SUCCESS](message: string): void {
    this.showNotification({
      type: NotificationType.SUCCESS,
      title: 'Success',
      message,
    });
  }

  private showNotification(props: ShowNotificationParams): void {
    Toast.show({
      type: props.type,
      text1: props.title,
      text2: props.message,
    });
  }
}

export { Notification };
