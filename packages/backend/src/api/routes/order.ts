import type { Services } from '@services';
import { type ApiRoutes, OrderApiRoutes } from '@vse-bude/shared';
import { type Request, Router } from 'express';
import { wrap, apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';

export const initOrderRoutes = (
  { orderService, paymentService }: Services,
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

  router.post(
    apiPath(path, OrderApiRoutes.STATUS),
    wrap(async (req: Request) => paymentService.setStatus(req.body)),
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

  router.get(
    apiPath(path, ':id'),
    authMiddleware,
    wrap((req: Request) => orderService.getById(req.params.id)),
  );

  return router;
};
