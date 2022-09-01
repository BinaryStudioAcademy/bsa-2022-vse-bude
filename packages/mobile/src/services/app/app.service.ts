import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import { ENGLISH_LOCALE } from '~/common/constants/constants';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(Duration);
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
      relativeTime: ENGLISH_LOCALE,
    });
  };

  public init = () => {
    this.dayJsInit();
  };
}

export { AppService };
