import type { SocialMediaType } from '@prisma/client';

export type SocialNet = {
  id: string;
  link: string;
  socialMedia: SocialMediaType;
};
