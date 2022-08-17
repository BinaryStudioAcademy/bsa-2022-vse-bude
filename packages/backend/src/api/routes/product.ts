import type { ApiRoutes } from '@vse-bude/shared';
import { ProductApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import type { ProductType } from '@prisma/client';

export const initProductRoutes = (
  { productService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path),
    wrap(() => productService.getAll()),
  );

  router.get(
    apiPath(path, ProductApiRoutes.$TYPE),
    wrap((req: Request) =>
      productService.getByType(req.params.type as ProductType, req.query),
    ),
  );

  return router;
};
