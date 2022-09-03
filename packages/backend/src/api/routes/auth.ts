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
import { langService } from '../../lang';

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

  router.get(apiPath(path, '/test'), (req, res) => {
    res.json({
      locale: langService.getLocale(),
    });
  });

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_IN),
    wrap<Empty, AuthResponse, UserSignInDto>((req: Request) =>
      authService.signIn(req.body, req),
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
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 $ref: "#/definitions/User"
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
   * definitions:
   *   RefreshToken:
   *     properties:
   *       expiresAt:
   *         type: string
   *         format: date-time
   *       token:
   *         type: string
   *       userId:
   *         type: string
   *       id:
   *         type: string
   *     required:
   *     - expiresAt
   *     - token
   *     - userId
   *     - id
   *     type: object
   *     description: Model RefreshToken
   */

  router.post(
    apiPath(path, AuthApiRoutes.REFRESH_TOKEN),
    wrap<Empty, AuthTokenData, UpdateRefreshToken>((req: Request) =>
      authService.refreshToken(req.body, req),
    ),
  );

  /**
   * @openapi
   * /auth/sign-up:
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
   *           required:
   *             - firstName
   *             - lastName
   *           properties:
   *             firstName:
   *               type: string
   *             lastName:
   *               type: string
   *             email:
   *               type: string
   *             phone:
   *               type: string
   *             password:
   *               type: string
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/User"
   */

  router.post(
    apiPath(path, AuthApiRoutes.SIGN_UP),
    wrap<Empty, AuthResponse, UserSignUpDto>((req: Request) =>
      authService.signUp(req.body, req),
    ),
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
   *               properties:
   *                 contribution:
   *                   $ref: "#/definitions/User"
   */

  router.get(
    apiPath(path, AuthApiRoutes.USER),
    authMiddleware,
    wrap((req: Request) => authService.getCurrentUser(req.userId)),
  );

  router.post(
    apiPath(path, AuthApiRoutes.RESET_PASSWORD_LINK),
    wrap((req: Request) => authService.resetPasswordLink(req.body.email)),
  );

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
