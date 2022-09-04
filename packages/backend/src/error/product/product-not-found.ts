import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class ProductNotFoundError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.NOT_FOUND,
      message: lang('translation:PRODUCT_NOT_FOUND'),
    });
  }
}

export { ProductNotFoundError };
