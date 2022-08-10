import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '../../helpers/api';
import { authMiddleware } from '../../auth/middlewares/auth.middleware';
import type { SignOutDto } from '../../common/types/auth/sign-out.dto';
import type { UpdateRefreshTokenDto } from '../../common/types/refresh-token/update.refresh-token.dto';

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

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_OUT),
    authMiddleware,
    wrap(async (req: Request) => {
      const signOutDto: SignOutDto = {
        userId: req.userId,
      };

      return await authService.signOut(signOutDto);
    }),
  );

  router.post(
    apiPath(path, AuthApiRoutes.REFRESH_TOKEN),
    wrap(async (req: Request) => {
      const updateRefreshTokenDto: UpdateRefreshTokenDto = {
        tokenValue: req.body.refreshToken,
      };

      return await authService.refreshToken(updateRefreshTokenDto);
    }),
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
