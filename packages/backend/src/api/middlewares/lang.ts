import type { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

class LangService {
  private _locale: string;

  public setLocale(locale: string) {
    this._locale = locale;
  }

  public getLocale(): string {
    return this._locale;
  }

  public translate() {
    const t = fs.readFileSync(
      path.resolve(
        `${__dirname}/../../locales/${this._locale}/translation.json`,
      ),
      'utf8',
    );
    const translation = JSON.parse(t);

    console.log(translation.NO_FILE_ERROR);
  }
}

export const langService = new LangService();

export const langMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const locale = req.cookies?.locale_name ?? 'ua';
  langService.setLocale(locale);
  langService.translate();
  next();
};
