import type { Services } from '@services';
import type { ApiRoutes } from '@vse-bude/shared';
import { type Request, Router } from 'express';
import { wrap, apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';

export const initOrderRoutes = (
  { orderService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path),
    authMiddleware,
    wrap((req: Request) =>
      orderService.create({ ...req.body, buyerId: req.userId }),
    ),
  );
  
  router.get(
    apiPath(path),
    authMiddleware,
    wrap((req: Request) =>
      orderService.getAll({
        buyerId: req.userId,
        productId: req.query.productId as string,
      }),
    ),
  );

  return router;
};
