export const randomSrc = ({ array }: { array: string[] }): string =>
  array[Math.floor(Math.random() * array.length)];
