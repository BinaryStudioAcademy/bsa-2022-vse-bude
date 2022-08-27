import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes } from '@vse-bude/shared';
import { AccountApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';
import { mapPersonalInfo } from '@mappers';

export const initUserAccountRoutes = (
  { userAccountService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, AccountApiRoutes.PERSONAL_INFO),
    authMiddleware,
    wrap(async (req: Request) => {
      const userId = req.userId;
      const address = await userAccountService.getAddress({ userId });
      const socialMedia = await userAccountService.getSocialMedia({ userId });
      const personalData = mapPersonalInfo({ address, socialMedia });
      
return { ...personalData };
    }),
  );

  return router;
};
