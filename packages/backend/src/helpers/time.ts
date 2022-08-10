export const fromMinToSeconds = (minutes: number) => minutes * 60;
export const fromMilliToSeconds = (milliseconds: number) =>
  Math.floor(milliseconds / 1000);
