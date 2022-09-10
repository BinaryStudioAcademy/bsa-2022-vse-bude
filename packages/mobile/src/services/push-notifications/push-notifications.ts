import PushNotification, {
  ReceivedNotification,
} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {
  ANDROID_PN_ICON_NAME,
  ANDROID_PN_DEFAULT_CHANNEL_ID,
  CHANEL_NAME,
  IS_IOS,
} from '~/common/constants/constants';

interface FirebaseNotification extends Omit<ReceivedNotification, 'userInfo'> {
  title?: string;
}
class PushNotificationService {
  public showNotification({ title, body }: { title: string; body: string }) {
    PushNotification.localNotification({
      title,
      message: body,
      smallIcon: ANDROID_PN_ICON_NAME,
      channelId: ANDROID_PN_DEFAULT_CHANNEL_ID,
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
          channelId: ANDROID_PN_DEFAULT_CHANNEL_ID,
          channelName: CHANEL_NAME,
        },
        () => resolve(),
      );
    });
  }

  private configureNotifications() {
    PushNotification.configure({
      onNotification: (notification: FirebaseNotification) => {
        this.showNotification({
          title: notification.title ?? '',
          body: notification.message.toString(),
        });

        if (IS_IOS) {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
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

export { PushNotificationService };
