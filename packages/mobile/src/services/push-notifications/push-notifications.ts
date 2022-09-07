import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const PUSH_CHANNEL_NAME = 'vsebude_push_notifications';
const PUSH_ICON_FILENAME = 'ic_notification';

type PushNotificationProps = {
  title?: string;
  body: string;
};

class PushController {
  public showNotification({ title, body }: PushNotificationProps) {
    PushNotification.localNotification({
      title,
      message: body,
      smallIcon: PUSH_ICON_FILENAME,
      channelId: PUSH_CHANNEL_NAME,
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
          channelId: PUSH_CHANNEL_NAME,
          channelName: PUSH_CHANNEL_NAME,
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
