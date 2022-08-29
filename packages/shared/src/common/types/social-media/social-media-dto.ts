import type { SocialMediaType } from '../../enums/social-media';

type SocialMedia = {
  id: string;
  link: string;
  socialMedia: SocialMediaType;
};

export type { SocialMedia };
