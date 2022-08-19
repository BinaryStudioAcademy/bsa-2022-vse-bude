export const hideMainTextPart = (text: string) => {
  const len = text.length;
  const charsToHide = 6;
  /* eslint-disable */
  const hideString = new Array(charsToHide).fill('X').join('');

  return `${text.substring(0, 5)}${hideString}${text.substring(len - 2)}`;
};
