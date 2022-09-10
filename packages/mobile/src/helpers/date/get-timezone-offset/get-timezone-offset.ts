import { MINUTES_IN_HOUR } from '~/common/constants/time';

export const getTimezoneOffset = (date: string) => {
  return new Date(date).getTimezoneOffset() / MINUTES_IN_HOUR;
};
