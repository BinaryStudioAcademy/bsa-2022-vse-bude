import type { Services } from '@services';
import { ApiRoutes, OrderApiRoutes } from '@vse-bude/shared';
import { type Request, Router } from 'express';
import { wrap, apiPath, getEnv } from '@helpers';
import { authMiddleware } from '@middlewares';

export const initOrderRoutes = (
  { orderService, paymentService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();
  /**
   * @openapi
   * /orders:
   *   post:
   *     description: Create order
   *     tags: [Order]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/CreateOrderBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/CreateOrderResponse"
   */
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

  router.post(apiPath(path, OrderApiRoutes.SUCCESS), (req, res) => {
    res.redirect(
      `${getEnv('APP_URL')}${ApiRoutes.ORDERS}${OrderApiRoutes.SUCCESS}`,
    );
  });

  /**
   * @openapi
   * /orders/create-payment:
   *   post:
   *     description: Create payment data
   *     tags: [Order]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             properties:
   *               orderId:
   *                 type: string
   *                 format: uuid
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/CreatePaymentResponse"
   */
  router.post(
    apiPath(path, OrderApiRoutes.CREATE_PAYMENT),
    authMiddleware,
    wrap(async (req: Request) =>
      paymentService.createRequestData(req.body.orderId, req.userId),
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

  router.get(
    apiPath(path, OrderApiRoutes.ID),
    authMiddleware,
    wrap((req: Request) => orderService.getById(req.params.id)),
  );

  return router;
};
