import type { SocialMedia } from '../social-media';

type UserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  socialMedia: SocialMedia[];
};

type UserAddressDto = {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  novaPoshtaRef?: string;
};

export type { UserProfileDto, UserAddressDto };
