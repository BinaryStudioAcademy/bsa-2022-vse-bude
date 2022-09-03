import dayjs from 'dayjs';
import { DateTimeFormat } from '~/common/enums/enums';

const getStrictTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(new Date()));
  const totalMs = duration.asMilliseconds();
  const [days, hours, minutes, seconds] = duration
    .format(DateTimeFormat.DD_HH_mm_ss)
    .split('-');
  if (totalMs > 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
      totalMs,
    };
  }

  return {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    totalMs: 0,
  };
};
export { getStrictTimeToEvent };
