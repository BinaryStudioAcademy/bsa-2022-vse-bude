import dayjs from 'dayjs';
import { t } from 'i18next';
import { MILLISECOND_IN_MINUTE } from '~/common/constants/time';

const getTimeToEvent = (date: string) => {
  const duration = dayjs.duration(dayjs(date).diff(dayjs()));
  if (duration.asMilliseconds() > MILLISECOND_IN_MINUTE) {
    const days =
      duration.days() > 0
        ? `${dayjs.duration(duration.days(), 'days').humanize()} `
        : '';
    const hours =
      duration.hours() > 0
        ? `${duration.hours()} ${t('common:time.HOURS_SHORT')} `
        : '';

    const minutes =
      duration.minutes() > 0
        ? `${duration.minutes()} ${t('common:time.MINUTES_SHORT')}`
        : '';

    return `${days}${hours}${minutes}`;
  }

  return dayjs().to(date);
};
export { getTimeToEvent };
