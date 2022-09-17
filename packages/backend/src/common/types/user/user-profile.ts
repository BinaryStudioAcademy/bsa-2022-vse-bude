import type { SocialNet } from './social-media';
import type { AddressDto } from './update-address';

export type UserProfile = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
};

export type GetUserProfile = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
};

export type FullUserProfileDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  userAddress?: AddressDto;
  socialMedia: SocialNet[];
  phoneVerified: boolean;
  emailVerified: boolean;
};
