import type { NextFunction, Request, Response } from 'express';

export const validation = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // const userSignInDto: UserSignInDto = {
  //   email: req.body.email,
  //   password: req.body.password,
  // };
  // const validation = signInValidationSchema.validate(userSignInDto);
  // if (validation.error) {
  //   return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).send({
  //     error: validation.error.details[0]?.message,
  //   });
  // }
  next();
};
