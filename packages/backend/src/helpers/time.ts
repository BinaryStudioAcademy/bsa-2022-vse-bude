import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const fromMinToSeconds = (minutes: number): number => minutes * 60;
export const fromMilliToSeconds = (milliseconds: number): number =>
  Math.floor(milliseconds / 1000);
export const fromSecondsToDate = (seconds: number): Date =>
  new Date(seconds * 1000);
export const toUtc = (datetime?: string | Date): dayjs.Dayjs => {
  if (!datetime) return dayjs().utc();

  return dayjs(datetime).utc();
};
