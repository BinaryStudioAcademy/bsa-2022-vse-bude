import dayjs from 'dayjs';
import { DateFormat } from '~/common/enums/enums';

const formaTotDateTime = (date: Date) => {
  return dayjs(date).format(DateFormat.dateTime);
};

const getSellerTimeZone = (date: Date) => {
  return dayjs(date).format(DateFormat.timeZone);
};

export { formaTotDateTime, getSellerTimeZone };
