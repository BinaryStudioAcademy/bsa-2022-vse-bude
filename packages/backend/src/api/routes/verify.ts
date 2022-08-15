import type { ApiRoutes, VerifyPhoneDto } from '@vse-bude/shared';
import { Router, type Request } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';
import { VerifyApiRoutes } from '@vse-bude/shared';

export const initVerifyRoutes = (
  { verifyService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path, VerifyApiRoutes.VERIFY_PHONE),
    authMiddleware,
    wrap((req: Request) => {
      const dto: VerifyPhoneDto = {
        userId: req.userId,
        code: req.body.code,
        type: 'PHONE',
      };

      return verifyService.verifyPhone(dto);
    }),
  );

  return router;
};
