import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/uk';
import { ENGLISH_LOCALE } from '~/common/constants/constants';
import { pushNotification } from '../services';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(Duration);
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
      relativeTime: ENGLISH_LOCALE,
    });
    dayjs.locale('uk');
  };

  private notificationInit = () => {
    pushNotification.init();
  };

  public init = () => {
    this.dayJsInit();
    this.notificationInit();
  };
}

export { AppService };
