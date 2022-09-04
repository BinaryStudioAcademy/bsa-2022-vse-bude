import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, MyListItem } from '@vse-bude/shared';
import { ProfileApiRoutes, AccountApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware, uploadImage } from '@middlewares';
import { profileValidation } from '@validation';
import type { UploadFileRequest } from '@types';

export const initProfileRoutes = (
  { profileService, myListService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, ProfileApiRoutes.GET_FULL_USER_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId } = req;
      const fullUserProfile = await profileService.getFullUserData({
        userId,
      });

      return {
        ...fullUserProfile,
      };
    }),
  );

  router.get(
    apiPath(path, AccountApiRoutes.MY_LIST),
    authMiddleware,
    wrap(async (req: Request): Promise<MyListItem[]> => {
      const { userId } = req;
      await profileService.getUser({
        userId,
      });
      const userItemsList = await myListService.getAllUserItems({ userId });

      return userItemsList;
    }),
  );

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
        socialMedia,
        password,
        newPassword,
      } = req.body;

      const user = await profileService.updateUserProfile({
        userId,
        data: { firstName, lastName, email, phone },
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

      return { ...user, socialMedia: links };
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
