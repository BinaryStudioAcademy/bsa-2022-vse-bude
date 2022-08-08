import type { NextFunction, Request, Response } from 'express';
import { signUpValidationSchema, type UserSignUpDto } from '@vse-bude/shared';
import { HttpStatusCode } from '@vse-bude/shared';

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const userSignUpDto: UserSignUpDto = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
  };
  const validation = signUpValidationSchema.validate(userSignUpDto);
  if (validation.error) {
    return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).send({
      error: validation.error.details[0]?.message,
    });
  }
  next();
};
