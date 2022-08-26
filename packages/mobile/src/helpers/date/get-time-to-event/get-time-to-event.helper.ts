import dayjs from 'dayjs';

const getTimeToEvent = (date: Date) => {
  const duration = dayjs.duration(dayjs(date).diff(dayjs()));
  if (duration.asMilliseconds() > 0) {
    const days = dayjs.duration(duration.days(), 'days').humanize();
    const hours = duration.hours();
    const minutes = duration.minutes();

    return `${days}  ${hours}h ${minutes}min`;
  }

  return dayjs().to(date);
};
export { getTimeToEvent };
