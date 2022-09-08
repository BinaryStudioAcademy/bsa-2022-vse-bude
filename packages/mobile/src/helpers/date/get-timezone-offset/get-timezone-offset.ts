import { MINUTES_IN_HOUR } from '~/common/constants/time';

export const getTimezoneOffset = (date: Date) => {
  return new Date(date).getTimezoneOffset() / MINUTES_IN_HOUR;
};
