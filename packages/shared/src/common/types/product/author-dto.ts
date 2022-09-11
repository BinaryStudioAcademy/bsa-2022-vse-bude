import type { SocialMediaDto } from './social-media.dto';

export type AuthorDto = {
  id: string;
  phone?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  socialMedia: SocialMediaDto[];
};
