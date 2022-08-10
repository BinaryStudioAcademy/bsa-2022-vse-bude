import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '../../helpers/api';
import { authMiddleware } from '../../auth/middlewares/auth.middleware';

export const initAuthRoutes = (
  { authService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    wrap(async (req: Request) => {
      const signInDto: UserSignInDto = {
        email: req.body.email,
        password: req.body.password,
      };

      return await authService.signIn(signInDto);
    }),
  );

  router.get(
    apiPath(path, '/test'),
    authMiddleware,
    wrap(
      (req: Request) =>
        new Promise((resolve) => {
          resolve(req.userId);
        }),
    ),
  );

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    wrap(async (req: Request) => {
      const signUpDto: UserSignUpDto = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
      };

      return await authService.signUp(signUpDto);
    }),
  );

  return router;
};
