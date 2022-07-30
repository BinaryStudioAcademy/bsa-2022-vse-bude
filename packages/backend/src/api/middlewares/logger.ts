import type { NextFunction, Request, Response } from 'express';
import { log } from '@helpers';

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  log(`METHOD: ${req.method}, PATH: ${req.path}`);

  next();
};
