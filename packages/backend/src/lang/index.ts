import { LangService } from './lang';

export const langService = new LangService();

export const lang = (key: string) => langService.translate(key);
