import { localesDir } from '@helpers';
import { DEFAULT_LOCALE } from '@vse-bude/shared';
import fs from 'fs';
import path from 'path';

export class LangService {
  private _locale: string;

  constructor() {
    this._locale = DEFAULT_LOCALE;
  }

  public setLocale(locale: string) {
    this._locale = locale;
  }

  public getLocale(): string {
    return this._locale;
  }

  private getPath(key: string) {
    const namespace = key.split(':')[0];

    return path.resolve(`${localesDir}/${this._locale}/${namespace}.json`);
  }

  private readTranslations(localePath: string) {
    const t = fs.readFileSync(path.resolve(localePath), 'utf8');

    return JSON.parse(t);
  }

  private getKeyWithoutNs(key: string): string {
    const parts = key.split(':');
    parts.shift();

    return parts[0] ?? '';
  }

  public translate(key: string) {
    const langPath = this.getPath(key);
    if (!fs.existsSync(langPath)) {
      return null;
    }
    const translations = this.readTranslations(langPath);
    const resultKey = this.getKeyWithoutNs(key);

    if (!resultKey) {
      return null;
    }

    return translations[resultKey] ?? null;
  }
}
