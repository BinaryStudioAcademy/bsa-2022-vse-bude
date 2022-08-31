import type { SocialMediaType } from '../../enums/social-media';

type SocialMedia = {
  id: string;
  link: string;
  socialMedia: SocialMediaType;
};

type NewSocialMedia = {
  link: string;
  socialMedia: SocialMediaType;
};

type MappedLinks = {
  facebook: string;
  linkedin: string;
  instagram: string;
};

export type { SocialMedia, NewSocialMedia, MappedLinks };
