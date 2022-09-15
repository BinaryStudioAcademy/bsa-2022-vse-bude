import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes } from '@vse-bude/shared';
import { ProfileApiRoutes, AccountApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware, uploadImage } from '@middlewares';
import { profileValidation } from '@validation';
import type { UploadFileRequest } from '@types';
import { UserExistsError } from '@errors';

export const initProfileRoutes = (
  { profileService, myListService, authService, notificationService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  /**
   * @openapi
   * /profile/full-data:
   *   get:
   *     description: Get Full user's profile data
   *     security:
   *       - Bearer: []
   *     tags: [Profile]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/FullUserProfileDto"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProfileApiRoutes.GET_FULL_USER_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId } = req;

      return await profileService.getFullUserData({
        userId,
      });
    }),
  );

  /**
   * @openapi
   * /profile/my-list:
   *   get:
   *     description: Get user's items data
   *     security:
   *       - Bearer: []
   *     tags: [Items]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/MyListItem"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, AccountApiRoutes.MY_LIST),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId } = req;
      await profileService.getUser({
        userId,
      });
      const requests = [
        myListService.getPurchasedItems({ userId }),
        myListService.getSoldItems({ userId }),
        myListService.getDraftedItems({ userId }),
        myListService.getPostedItems({ userId }),
        myListService.getArchived({ userId }),
      ];

      return await Promise.all(requests).then((items) => items.flat());
    }),
  );

  /**
   * @openapi
   * /profile/save:
   *   put:
   *     description: Updates user profile data
   *     security:
   *       - Bearer: []
   *     tags: [Profile]
   *     produces:
   *       - application/json
   *     requestBody:
   *        schema:
   *          $ref: "#/definitions/UpdateProfileBody"
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/FullUserProfileDto"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.put(
    apiPath(path, ProfileApiRoutes.UPDATE_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId } = req;
      profileValidation({ req });

      const {
        firstName,
        lastName,
        email,
        phone,
        userAddress,
        socialMedia,
        password,
        newPassword,
      } = req.body;

      const userFromDb = await profileService.getFullUserData({
        userId,
      });

      const userByEmail = await authService.getByEmail(email);

      if (userByEmail && userByEmail.id !== userFromDb.id) {
        throw new UserExistsError();
      }
      if (
        !userByEmail &&
        userFromDb.email.toLowerCase() !== email.toLowerCase()
      ) {
        await profileService.cancelEmailVerified({ userId });
      }

      if (phone) {
        await profileService.checkIsPhoneExists({
          userId,
          phone,
        });
      }

      if (phone !== userFromDb.phone) {
        await profileService.cancelPhoneVerified({ userId });
      }

      const reqMappedPhone = phone === '' ? null : phone;

      const user = await profileService.updateUserProfile({
        userId,
        data: { firstName, lastName, email, phone: reqMappedPhone },
      });

      const resMappedPhone = !user.phone ? '' : user.phone;

      const address = await profileService.updateUserAddress({
        userId,
        userAddress,
      });

      await profileService.updateUserSocialMedia({
        userId,
        socialMedia,
      });

      const links = await profileService.getSocialMedia({ userId });

      if (newPassword) {
        await profileService.changePassword({
          userId,
          data: { newPassword, password },
        });
      }

      return {
        ...user,
        phone: resMappedPhone,
        userAddress: address,
        socialMedia: links,
      };
    }),
  );

  router.put(
    apiPath(path, ProfileApiRoutes.UPDATE_AVATAR),
    authMiddleware,
    uploadImage,
    wrap(async (req: UploadFileRequest) => {
      const { userId } = req;

      return await profileService.updateAvatar({ userId, req });
    }),
  );

  router.get(
    apiPath(path, ProfileApiRoutes.GET_NOTIFICATIONS),
    authMiddleware,
    wrap((req: Request) => notificationService.getAll(req.userId, req.query)),
  );

  router.patch(
    apiPath(path, ProfileApiRoutes.PATCH_NOTIFICATION),
    authMiddleware,
    wrap((req: Request) => notificationService.setAsViewed(req)),
  );

  /**
   * @openapi
   * /profile/:userId:
   *   get:
   *     description: Get user's profile
   *     security:
   *       - Bearer: []
   *     tags: [Profile]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         type: string
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Ok
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               $ref: "#/definitions/UserProfileDto"
   *       4**:
   *         description: Something went wrong
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Response400"
   */
  router.get(
    apiPath(path, ProfileApiRoutes.GET_USER_BY_ID),
    wrap(async (req: Request) => {
      const { userId } = req.params;
      const user = await profileService.getUser({ userId });
      const socialMedia = await profileService.getSocialMedia({ userId });

      return {
        ...user,
        socialMedia,
      };
    }),
  );

  return router;
};
