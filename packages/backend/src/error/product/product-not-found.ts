import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import type { Request } from 'express';

class ProductNotFoundError extends HttpError {
  constructor(req: Request) {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: req.t('PRODUCT_NOT_FOUND'),
    });
  }
}

export { ProductNotFoundError };
