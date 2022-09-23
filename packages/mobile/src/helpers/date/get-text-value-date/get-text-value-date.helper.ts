import dayjs from 'dayjs';
import { DateFormat } from '~/common/enums/enums';
import { DateTimeType } from '~/common/enums/ui/ui';

const getTextValueDate = (value: string, mode: DateTimeType): string | null => {
  const date = value ? dayjs(value).format(DateFormat.DATE_SLASH) : null;
  const time = value ? dayjs(value).format(DateFormat.TIME_ONLY) : null;
  const dateTime = value ? dayjs(value).format(DateFormat.DATE_TIME) : null;

  switch (mode) {
    case DateTimeType.DATE:
      return date;

    case DateTimeType.TIME:
      return time;

    case DateTimeType.DATE_TIME:
      return dateTime;

    default:
      return null;
  }
};

export { getTextValueDate };
