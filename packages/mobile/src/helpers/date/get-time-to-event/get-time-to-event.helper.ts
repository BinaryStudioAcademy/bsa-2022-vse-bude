import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(Duration);
dayjs.extend(relativeTime);

const getTimeToEvent = (date: string) => {
  const ms = +dayjs(date) - +dayjs();
  if (ms > 0) {
    const days = dayjs.duration(dayjs.duration(ms).days(), 'days').humanize();
    const hours = dayjs.duration(ms).hours();
    const minutes = dayjs.duration(ms).minutes();

    return `${days}  ${hours}h ${minutes}min`;
  }

  return dayjs().to(date);
};
export { getTimeToEvent };
