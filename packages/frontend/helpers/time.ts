import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import type { TimerTranslations } from '../common/types/timer';

dayjs.extend(Duration);

export const timeToEventString = (date: Date, {
  hoursText, daysText, minsText, secsText
}: TimerTranslations): string => {
  const toTheEnd = timeToEventObj(date);

  let timeString = '';
  const days = toTheEnd.days();
  if (days) {
    timeString += `${toTheEnd.days()} ${daysText} `;
  }
  timeString += `${toTheEnd.hours()} ${hoursText} `;
  timeString += `${toTheEnd.minutes()} ${minsText}`;
  if (!days) {
    timeString += ` ${toTheEnd.seconds()} ${secsText}`;
  }

  return timeString;
};

export const timeToEventObj = (date: Date) => {
  const now = dayjs();
  const endDate = dayjs(date);

  return dayjs.duration(endDate.diff(now));
};

export { dayjs };
