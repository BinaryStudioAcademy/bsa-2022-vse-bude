export const fromMinToSeconds = (minutes: number) => minutes * 60;
export const fromMilliToSeconds = (milliseconds: number) =>
  Math.floor(milliseconds / 1000);
export const fromSecondsToDate = (seconds: number) => new Date(seconds * 1000);
