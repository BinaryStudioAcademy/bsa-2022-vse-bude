import { FieldError } from 'error/product/field-error';
import type { NextFunction, Request, Response } from 'express';
import { updatePostSchema } from './schemas';

export const updateProductValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { t } = req;
  const { error } = updatePostSchema(t).validate(req.body);
  if (error) {
    throw new FieldError(error.message);
  }
  next();
};
