import type { NextFunction, Request, Response } from 'express';

export const addressValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next();
};
