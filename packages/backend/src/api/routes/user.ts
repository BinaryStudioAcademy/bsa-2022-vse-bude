import type { ApiRoutes } from '@vse-bude/shared';
import { Router } from 'express';
import { wrap } from '@helpers';
import type { Services } from '@services';

export const initUserRoutes = ({ userService }: Services, path: ApiRoutes) => {
  const router = Router();

  return router.get(
    path,
    wrap(() => userService.getAll()),
  );
};
