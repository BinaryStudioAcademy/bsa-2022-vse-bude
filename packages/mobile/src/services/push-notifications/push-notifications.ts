import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { PUSH_CHANNEL, PUSH_ICON } from '~/common/constants/constants';

type PushNotificationProps = {
  title?: string;
  body: string;
};

class PushController {
  public showNotification({ title, body }: PushNotificationProps) {
    PushNotification.localNotification({
      title,
      message: body,
      smallIcon: PUSH_ICON,
      channelId: PUSH_CHANNEL,
    });
  }

  public async init() {
    await this.createChannel();
    this.configureNotifications();
  }

  private createChannel(): Promise<void> {
    return new Promise((resolve) => {
      PushNotification.createChannel(
        {
          channelId: PUSH_CHANNEL,
          channelName: PUSH_CHANNEL,
        },
        () => resolve(),
      );
    });
  }

  private configureNotifications() {
    PushNotification.configure({
      onNotification: (notification) => {
        this.showNotification({
          body: notification.message.toString(),
        });

        // required on iOS only
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }
}

export { PushController };
