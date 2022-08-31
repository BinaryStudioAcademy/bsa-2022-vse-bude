import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

class AppService {
  private dayJsInit = () => {
    dayjs.extend(Duration);
  };

  public init = () => {
    this.dayJsInit();
  };
}

export { AppService };
