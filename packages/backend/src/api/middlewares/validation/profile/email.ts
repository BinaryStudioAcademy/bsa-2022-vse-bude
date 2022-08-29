import type { NextFunction, Request, Response } from 'express';

export const emailValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // const {email} = req.body;
  // const isEmail = /([0-9a-zA-Z!#$%&'*+-/=?^_`{|}~.]{1,64})@([0-9a-z]+)\.([0-9a-z]{2,64})/.test(email);
  // if(!isEmail) {
  //   console.log('email error')
  // }
  next();
};
