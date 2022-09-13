import { FieldError } from 'error/product/field-error';
import type { NextFunction, Request, Response } from 'express';
import { updatePostSchema } from './schemas';

export const updateProductValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const { error } = updatePostSchema.validate(req.body);
  if (error) {
    throw new FieldError(error.message);
  }
  next();
};
