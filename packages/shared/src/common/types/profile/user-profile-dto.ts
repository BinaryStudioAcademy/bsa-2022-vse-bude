import type { SocialMedia } from '../social-media';

type UserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  socialMedia: SocialMedia[];
};

type FullUserProfileDto = {
  id: string;
  avatar?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  userAddress: UserAddressDto;
  socialMedia: SocialMedia[];
};

type UserAddressDto = {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  novaPoshtaRef?: string;
};

export type { UserProfileDto, UserAddressDto, FullUserProfileDto };
