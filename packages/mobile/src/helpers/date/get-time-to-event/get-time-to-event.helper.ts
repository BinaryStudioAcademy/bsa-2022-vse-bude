import dayjs from 'dayjs';
import { t } from 'i18next';

const getTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(dayjs()));
  if (duration.asMilliseconds() > 60000) {
    const days =
      duration.days() > 0
        ? `${dayjs.duration(duration.days(), 'days').humanize()} `
        : '';
    const hours =
      duration.hours() > 0
        ? `${duration.hours()} ${t('common:time.HOURS')} `
        : '';

    const minutes =
      duration.minutes() > 0
        ? `${duration.minutes()} ${t('common:time.MINUTES')}`
        : '';

    return `${days}${hours}${minutes}`;
  }

  return dayjs().to(date);
};
export { getTimeToEvent };
