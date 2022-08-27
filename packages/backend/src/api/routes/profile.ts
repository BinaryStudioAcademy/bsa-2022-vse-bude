import type { Services } from '@services';
import { type Request, Router } from 'express';
import type { ApiRoutes, UserProfileDto } from '@vse-bude/shared';
import { ProfileApiRoutes } from '@vse-bude/shared';
import { wrap } from '@helpers';
import { apiPath } from '@helpers';
import { authMiddleware } from '@middlewares';

export const initProfileRoutes = (
  { profileService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, ProfileApiRoutes.GET_USER_BY_ID),
    wrap((req: Request) => {
      const { userId } = req.params;
      const user = profileService.getUser({ userId });
      const socialMedia = profileService.getSocialMedia({ userId });
      
return {
        ...user,
        socialMedia,
      };
    }),
  );

  router.put(
    apiPath(path, ProfileApiRoutes.UPDATE_DATA),
    authMiddleware,
    wrap(async (req: Request) => {
      const { userId } = req;
      const { avatar, firstName, lastName, socialMedia } = <UserProfileDto>(
        req.body
      );

      const user = await profileService.updateUserProfile({
        userId,
        data: { avatar, firstName, lastName },
      });

      if (socialMedia.length) {
        const links = await profileService.updateUserSocialMedia({
          userId,
          socialMedia,
        });

        return { ...user, socialMedia: links };
      }

      return { ...user, socialMedia };
    }),
  );

  return router;
};
