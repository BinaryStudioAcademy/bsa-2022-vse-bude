import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import type { SignOut, UpdateRefreshToken, AuthTokenData } from '@types';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';

export const initAuthRoutes = (
  { authService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /auth:
   *  get:
   *    tag:
   *      - Users
   *    description: Get current user
   *    responses:
   *      200:
   *        description: Returns current user
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    wrap<Empty, AuthTokenData, UserSignInDto>((req: Request) =>
      authService.signIn(req.body, req),
    ),
  );

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_OUT),
    authMiddleware,
    wrap(async (req: Request) => {
      const signOutDto: SignOut = {
        userId: req.userId,
      };

      return authService.signOut(signOutDto);
    }),
  );

  router.post(
    apiPath(path, AuthApiRoutes.REFRESH_TOKEN),
    wrap<Empty, AuthTokenData, UpdateRefreshToken>((req: Request) =>
      authService.refreshToken(req.body, req),
    ),
  );

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    wrap<Empty, AuthTokenData, UserSignUpDto>((req: Request) =>
      authService.signUp(req.body, req),
    ),
  );

  router.get(
    apiPath(path, AuthApiRoutes.USER),
    authMiddleware,
    wrap((req: Request) => authService.getCurrentUser(req.userId)),
  );

  return router;
};
