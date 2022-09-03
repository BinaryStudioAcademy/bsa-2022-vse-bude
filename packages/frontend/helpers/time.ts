import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import type { TimerTranslations } from '../common/types/timer';

dayjs.extend(Duration);

export const timeToEventString = (
  date: Date,
  { hoursText, daysText, minsText, secsText }: TimerTranslations,
): string => {
  let timeString = '';

  const toTheEnd = timeToEventObj(date);
  const days = toTheEnd.days();
  const hours = toTheEnd.hours();
  const minutes = toTheEnd.minutes();
  const seconds = toTheEnd.seconds();

  if (days > 0) timeString += `${days} ${daysText} `;
  if (hours > 0) timeString += `${hours} ${hoursText} `;
  if (minutes > 0) timeString += `${minutes} ${minsText} `;
  if (days <= 0) {
    timeString += `${seconds > 0 ? seconds : `0`} ${secsText}`;
  }

  return timeString;
};

export const timeToEventObj = (date: Date) => {
  const now = dayjs();
  const endDate = dayjs(date);

  return dayjs.duration(endDate.diff(now));
};

export { dayjs };
