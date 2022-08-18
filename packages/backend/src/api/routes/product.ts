import type { ApiRoutes } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import type { ProductType } from '@prisma/client';

type RequestParams = {
  type: ProductType;
};

export const initProductRoutes = (
  { productService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /products:
   *  get:
   *    tags:
   *      - Products
   *    description: Get products.
   *    responses:
   *      200:
   *        description: Returns products list.
   */

  router.get(
    apiPath(path),
    wrap(() => productService.getAll()),
  );

  router.get(
    apiPath(path, ProductApiRoutes.$TYPE),
    wrap<RequestParams>((req) =>
      productService.getByType(req.params.type, req.query),
    ),
  );

  return router;
};
