import type { SocialMedia, NewSocialMedia } from '../social-media';
import type { UserAddressDto } from './user-profile-dto';

type SocialMediaArray = SocialMedia | NewSocialMedia;

type SaveUserProfileDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  userAddres: UserAddressDto | null;
  socialMedia: SocialMediaArray[] | [];
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
};

export type { SaveUserProfileDto };
