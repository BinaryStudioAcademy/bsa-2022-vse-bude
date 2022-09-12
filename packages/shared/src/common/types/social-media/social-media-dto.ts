import type { SocialMediaType } from '../../enums';

type SocialMedia = {
  id?: string;
  link: string;
  socialMedia: SocialMediaType;
};

type MappedLinks = {
  facebook: string;
  linkedin: string;
  instagram: string;
};

export type { SocialMedia, MappedLinks };
