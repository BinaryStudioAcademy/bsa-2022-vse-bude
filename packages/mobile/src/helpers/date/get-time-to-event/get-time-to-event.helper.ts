import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(Duration);
dayjs.extend(relativeTime);

const getTimeToEvent = (date: string) => {
  const ms = +dayjs(date) - +dayjs();
  if (ms > 0) {
    const days = dayjs.duration(dayjs.duration(ms).days(), 'days').humanize();
    const hours = dayjs
      .duration(dayjs.duration(ms).hours(), 'hours')
      .humanize();
    const minutes = dayjs
      .duration(dayjs.duration(ms).hours(), 'minutes')
      .humanize();

    return `${days}  ${hours.slice(0, 3)} ${minutes.slice(0, 5)}`;
  }

  return dayjs().to(date);
};
export { getTimeToEvent };
