import type { Request } from 'express';
import type { SocialMedia } from '@vse-bude/shared';
import {
  HttpStatusCode,
  UserPersonalInfoValidationMessage,
  ValidationRanges,
} from '@vse-bude/shared';
import { ProfileError } from '@errors';
import { lang } from '@lang';

export const socialMediaValidation = ({ req }: { req: Request }): void => {
  const socialMedia: SocialMedia[] = req.body.socialMedia;
  if (socialMedia.length) {
    socialMedia.forEach((net) => {
      if (net.link.length > ValidationRanges.MAX_SOCIAL_NETWORK_URI_SYMBOLS) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.URI_MAX_SYMBOLS),
        });
      }
      if (!net.socialMedia && (net.link || net.id)) {
        throw new ProfileError({
          status: HttpStatusCode.BAD_REQUEST,
          message: lang(UserPersonalInfoValidationMessage.URI_BAD_REQUEST),
        });
      }
    });
  }
};
