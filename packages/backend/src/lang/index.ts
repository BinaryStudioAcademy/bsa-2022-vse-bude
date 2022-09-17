import { LangService } from './lang';

export const langService = new LangService();

export const lang = (
  key: string,
  interpolatedFields?: Record<string, string | number>,
  locale?: string,
): string => langService.translate(key, interpolatedFields, locale);
