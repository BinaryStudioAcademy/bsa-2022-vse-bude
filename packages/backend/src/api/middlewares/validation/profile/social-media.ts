import type { NextFunction, Request, Response } from 'express';

export const socialMediaValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { socialMedia } = req.body;
  if (!socialMedia.length) {
    return next();
  }

  next();
};
