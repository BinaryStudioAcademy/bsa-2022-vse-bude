import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { validation as signInValidation } from '../validation/auth/sign-in.validation';
import { validation as signUpValidation } from '../validation/auth/sign-up.validation';
import { apiPath } from '../../helpers/api';

export const initAuthRoutes = (
  { authService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    signInValidation,
    wrap(async (req: Request) => {
      const signInDto: UserSignInDto = {
        email: req.body.email,
        password: req.body.password,
      };

      return await authService.signIn(signInDto);
    }),
  );

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    signUpValidation,
    wrap(async (req: Request) => {
      const signUpDto: UserSignUpDto = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
      };

      return await authService.signUp(signUpDto);
    }),
  );

  return router;
};
