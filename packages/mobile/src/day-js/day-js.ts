import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

const dayjsInit = () => {
  dayjs.extend(Duration);
};

export { dayjsInit };
