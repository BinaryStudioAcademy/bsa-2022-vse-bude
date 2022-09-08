import type { SocialMedia } from '../social-media';
import type { UserAddressDto } from './user-profile-dto';

type UpdateFullUserProfileDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  userAddress?: UserAddressDto | null;
  socialMedia: SocialMedia[] | [];
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
};

export type { UpdateFullUserProfileDto };
