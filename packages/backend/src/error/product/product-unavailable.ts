import { HttpError, HttpStatusCode } from '@vse-bude/shared';
import { lang } from '../../lang';

class ProductUnavailableError extends HttpError {
  constructor() {
    super({
      status: HttpStatusCode.BAD_REQUEST,
      message: lang('translation:PRODUCT_UNAVAILABLE'),
    });
  }
}

export { ProductUnavailableError };
