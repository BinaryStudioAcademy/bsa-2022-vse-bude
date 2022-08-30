import type { SocialMediaType } from '@prisma/client';

export interface GetUserProfileDto {
  id: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
}

export interface UserSocialMediaDto {
  id: string;
  socialMedia: SocialMediaType;
  link: string;
}

export interface GetUserAddressDto {
  country: string | null;
  region: string | null;
  city: string | null;
  address: string | null;
  zip: string | null;
  novaPoshtaRef: string | null;
}

export interface UpdateUserProfileDto {
  avatar: string | null;
  firstName: string;
  lastName: string;
}
