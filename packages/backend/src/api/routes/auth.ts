import type { Services } from '@services';
import { type Request, Router } from 'express';
import type {
  ApiRoutes,
  AuthResponse,
  UpdatePassword,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { AuthApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import type { SignOut, UpdateRefreshToken, AuthTokenData } from '@types';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';
import { signupValidation } from '@validation';

export const initAuthRoutes = (
  { authService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /auth/sign-in:
   *   post:
   *     description: Authenticates user via email & password
   *     operationId: auth.sign-in
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/SignInBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/SignInResponse"
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    wrap<Empty, AuthResponse, UserSignInDto>((req: Request) =>
      authService.signIn(req.body),
    ),
  );

  /**
   * @openapi
   * /auth/sign-out:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: query
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Empty response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

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

  /**
   * @openapi
   * /auth/refresh-token:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/RefreshTokenBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/RefreshTokenResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, AuthApiRoutes.REFRESH_TOKEN),
    wrap<Empty, AuthTokenData, UpdateRefreshToken>((req: Request) =>
      authService.refreshToken(req.body),
    ),
  );

  /**
   * @openapi
   * /auth/sign-up:
   *   description: Creates user's account, but unverified (phoneVerified = false, emailVerified = false)
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/definitions/SignUpBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/SignUpResponse"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    wrap<Empty, AuthResponse, UserSignUpDto>((req: Request) => {
      signupValidation({ req });

      return authService.signUp(req.body);
    }),
  );

  /**
   * @openapi
   * /auth/user:
   *   get:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: userId
   *         in: query
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/User"
   */

  router.get(
    apiPath(path, AuthApiRoutes.USER),
    authMiddleware,
    wrap((req: Request) => authService.getCurrentUser(req.userId)),
  );

  /**
   * @openapi
   * /auth/reset-password-link:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           $ref: "#/definitions/ResetPasswordLinkBody"
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.post(
    apiPath(path, AuthApiRoutes.RESET_PASSWORD_LINK),
    wrap((req: Request) => authService.resetPasswordLink(req.body.email)),
  );

  /**
   * @openapi
   * /auth/update-password:
   *   post:
   *     tags: [Auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           $ref: "#/definitions/UpdatePasswordBody"
   *     responses:
   *       204:
   *         description: Empty Response
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.post(
    apiPath(path, AuthApiRoutes.UPDATE_PASSWORD),
    wrap((req: Request) => {
      const updateDto: UpdatePassword = {
        email: req.body.email,
        updateHash: req.body.updateHash,
        password: req.body.password,
        repeatPassword: req.body.password,
      };

      return authService.updatePassword(updateDto);
    }),
  );

  return router;
};
