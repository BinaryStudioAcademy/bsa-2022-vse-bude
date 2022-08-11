const DEFAULT_TEXT_LIMIT = 70;

export const textLimit = (text: string, limit = DEFAULT_TEXT_LIMIT): string =>
  `${text.substring(0, limit)}...`;
