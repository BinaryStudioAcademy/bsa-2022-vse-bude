import { localesDir } from '@helpers';
import { DEFAULT_LOCALE } from '@vse-bude/shared';
import fs from 'fs';
import path from 'path';

export class LangService {
  private _locale: string;

  constructor() {
    this._locale = DEFAULT_LOCALE;
  }

  public setLocale(locale: string): void {
    this._locale = locale;
  }

  public getLocale(): string {
    return this._locale;
  }

  private getPath(key: string, locale?: string): string {
    const namespace = key.split(':')[0];

    return path.resolve(
      `${localesDir}/${locale || this._locale}/${namespace}.json`,
    );
  }

  private readTranslations(localePath: string): string {
    const t = fs.readFileSync(path.resolve(localePath), 'utf8');

    return JSON.parse(t);
  }

  private getKeyWithoutNs(key: string): string {
    const parts = key.split(':');
    parts.shift();

    return parts[0] ?? '';
  }

  public translate(
    key: string,
    interpolatedFields?: Record<string, string | number>,
    locale?: string,
  ): null | string {
    const langPath = this.getPath(key, locale);

    if (!fs.existsSync(langPath)) {
      return null;
    }

    const translations = this.readTranslations(langPath);
    const resultKey = this.getKeyWithoutNs(key);

    if (!resultKey) {
      return null;
    }

    const value = this.getValue(translations, resultKey.split('.'), 0) ?? null;

    if (interpolatedFields && value) {
      return this.interpolate(value, interpolatedFields);
    }

    return value;
  }

  private getValue(obj: any, keys: string[], currentKey: number): string {
    if (keys[currentKey + 1]) {
      return this.getValue(obj[keys[currentKey]], keys, currentKey + 1);
    }

    return obj[keys[currentKey]];
  }

  private interpolate(
    line: string,
    fields: Record<string, string | number>,
  ): string {
    let interpolatedLine = line;
    Object.keys(fields).forEach((key) => {
      interpolatedLine = interpolatedLine.replace(
        `{{${key}}}`,
        `${fields[key]}`,
      );
    });

    return interpolatedLine;
  }
}
