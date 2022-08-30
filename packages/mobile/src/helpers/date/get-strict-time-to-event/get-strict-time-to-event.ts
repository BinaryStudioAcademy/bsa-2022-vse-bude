import dayjs from 'dayjs';

const getStrictTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(new Date()));
  const [days, hours, minutes, seconds] = duration
    .format('D-HH-mm-ss')
    .split('-');
  const totalMs = duration.asMilliseconds();

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
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
    totalMs: 0,
  };
};

export { getStrictTimeToEvent };
