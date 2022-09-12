import type { SocialMedia } from '../social-media';

type UserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  socialMedia: SocialMedia[];
  phone?: string;
};

type FullUserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  userAddress?: UserAddressDto;
  socialMedia: SocialMedia[];
  phoneVerified: boolean;
  emailVerified: boolean;
};

type UserAddressDto = {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  deliveryData?: string;
};

type UpdateUserProfileDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
};

type UpdatePasswordDto = {
  password: string;
  newPassword: string;
};

export type {
  UserProfileDto,
  UserAddressDto,
  FullUserProfileDto,
  UpdateUserProfileDto,
  UpdatePasswordDto,
};
