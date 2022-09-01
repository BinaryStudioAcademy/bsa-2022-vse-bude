import { FieldError } from 'error/product/field-error';
import type { NextFunction, Request, Response } from 'express';
import { createPostSchema } from './schemas';

export const createProductValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { t } = req;
  const { error } = createPostSchema(t).validate(req.body);
  if (error) {
    throw new FieldError(error.message);
  }
  next();
};
