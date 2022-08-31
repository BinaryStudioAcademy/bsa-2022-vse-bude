import type { SocialMedia } from '../social-media';

type UserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  socialMedia: SocialMedia[];
};

type RequestUserProfileDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  userAddress: UserAddressDto;
  socialMedia: SocialMedia[];
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
};

type UserAddressDto = {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  novaPoshtaRef?: string;
};

export type { UserProfileDto, UserAddressDto, RequestUserProfileDto };
