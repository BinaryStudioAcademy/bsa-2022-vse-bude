import dayjs from 'dayjs';
import { t } from 'i18next';

const getStrictTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(new Date()));
  const totalMs = duration.asMilliseconds();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (totalMs > 0) {
    return {
      values: {
        days: `${days}`,
        hours: `${hours}`,
        minutes: `${minutes}`,
        seconds: `${seconds}`,
        totalMs,
      },
      names: {
        daysName:
          days > 0
            ? dayjs.duration(days, 'days').humanize().split(/\W/)[1]
            : t('common:time.DAYS'),
        hoursName:
          days > 0
            ? dayjs.duration(hours, 'hours').humanize().split(/\W/)[1]
            : t('common:time.HOURS'),
        minutesName: t('common:time.MINUTES_SHORT'),
        secondsName: t('common:time.SECONDS_SHORT'),
      },
    };
  }

  return {
    values: {
      days: '0',
      hours: '00',
      minutes: '00',
      seconds: '00',
      totalMs: 0,
    },
    names: {
      daysName: t('common:time.DAYS'),
      hoursName: t('common:time.HOURS'),
      minutesName: t('common:time.MINUTES_SHORT'),
      secondsName: t('common:time.SECONDS_SHORT'),
    },
  };
};

export { getStrictTimeToEvent };
