import type { Services } from '@services';
import type { ApiRoutes } from '@vse-bude/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { wrap } from '@helpers';
import { authMiddleware } from '@middlewares';
import type { CreateBidDto } from '@types';

export const initBidRoutes = (
  { bidService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /bid:
   *   post:
   *     description: Creates bid for product
   *     operationId: bid.create
   *     tags: [Bid]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/CreateBidBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/CreateBidResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    path,
    authMiddleware,
    wrap((req: Request) => {
      const createDto: CreateBidDto = {
        bidderId: req.userId,
        price: req.body.price,
        productId: req.body.productId,
      };

      return bidService.createBid(createDto);
    }),
  );

  return router;
};
