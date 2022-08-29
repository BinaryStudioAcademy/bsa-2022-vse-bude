import type { NextFunction, Request, Response } from 'express';

export const phoneValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const { phone } = req.body;
  // const isPhone = /^\+\d{12,15}$/.test(phone);
  // if(!isPhone) {
  //   console.log('phone error')
  // }
  next();
};
