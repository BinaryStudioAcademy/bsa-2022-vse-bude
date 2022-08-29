import dayjs from 'dayjs';

const getStrictTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(dayjs()));
  const totalMs = duration.asMilliseconds();
  if (totalMs > 0) {
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      totalMs,
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
  };
};

export { getStrictTimeToEvent };
