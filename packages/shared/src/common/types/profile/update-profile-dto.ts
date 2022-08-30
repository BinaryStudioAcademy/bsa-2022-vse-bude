import { UserAddressDto } from './user-profile-dto';
import { SocialMedia, NewSocialMedia } from '../social-media';

type SocialMediaArray = SocialMedia | NewSocialMedia;

type UpdateUserProfileDto = {
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

export type { UpdateUserProfileDto };
