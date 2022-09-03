import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/uk';
import { ENGLISH_LOCALE } from '~/common/constants/constants';
import { languages } from '~/common/enums/enums';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(Duration);
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale(languages.EN, {
      relativeTime: ENGLISH_LOCALE,
    });
    dayjs.locale(languages.UK);
  };

  public init = () => {
    this.dayJsInit();
  };
}

export { AppService };
