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

  router.get(
    apiPath(path),
    wrap<RequestParams>((req) => productService.getAll(req.query)),
  );

  router.get(
    apiPath(path, ProductApiRoutes.ID),
    wrap((req) => productService.getById(req.params.id)),
  );

  return router;
};
