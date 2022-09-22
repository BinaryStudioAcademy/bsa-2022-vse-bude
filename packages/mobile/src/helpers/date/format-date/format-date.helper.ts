import dayjs from 'dayjs';
import { DateFormat } from '~/common/enums/enums';

const formatToDateTime = (date: string) => {
  return dayjs(date).format(DateFormat.DATE);
};

export { formatToDateTime };
