import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import type { TimerTranslations } from '../common/types/timer';

dayjs.extend(Duration);

export const timeToEventString = (
  date: string,
  { hoursText, daysText, minsText, secsText }: TimerTranslations,
): string => {
  let timeString = '';
  let isDaysShown = false;
  let isHoursShown = false;

  const toTheEnd = timeToEventObj(date);
  const days = toTheEnd.days();
  const hours = toTheEnd.hours();
  const minutes = toTheEnd.minutes();
  const seconds = toTheEnd.seconds();

  if (days > 0) {
    timeString += `${days} ${daysText} `;
    isDaysShown = true;
  }
  if (hours > 0 || isDaysShown) {
    timeString += `${hours > 0 ? hours : `0`} ${hoursText} `;
    isHoursShown = true;
  }
  if (minutes > 0 || isHoursShown) {
    timeString += `${minutes > 0 ? minutes : `0`} ${minsText} `;
  }
  if (days <= 0) {
    timeString += `${seconds > 0 ? seconds : `0`} ${secsText}`;
  }

  return timeString;
};

export const timeToEventObj = (date: string) => {
  const now = dayjs();
  const endDate = dayjs(date);

  return dayjs.duration(endDate.diff(now));
};

export { dayjs };
