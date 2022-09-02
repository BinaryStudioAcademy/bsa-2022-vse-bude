import { HttpError, HttpStatusCode } from '@vse-bude/shared';

class ProductNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: 'Product not found!',
    });
  }
}

export { ProductNotFoundError };
