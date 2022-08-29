import dayjs from 'dayjs';

const getStrictTimeToEvent = (date: Date) => {
  const timeDuration = dayjs.duration(dayjs(date).diff(dayjs()));
  if (timeDuration.asMilliseconds() > 0) {
    return {
      days: timeDuration.days(),
      hours: timeDuration.hours(),
      minutes: timeDuration.minutes(),
      seconds: timeDuration.seconds(),
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
};

export { getStrictTimeToEvent };
