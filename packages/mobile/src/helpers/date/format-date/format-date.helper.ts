import dayjs from 'dayjs';
import { DateFormat } from '~/common/enums/enums';

const formatToDateTime = (date: Date) => {
  return dayjs(date).format(DateFormat.dateTime);
};

export { formatToDateTime };
