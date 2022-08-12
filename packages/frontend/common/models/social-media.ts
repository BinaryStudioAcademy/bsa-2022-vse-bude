import type { SocialMediaType } from '@enums';
import type { Product } from './product';
import type { User } from './user';

export interface SocialMedia {
  id: string;
  socialMedia: SocialMediaType;
  link: string;
  user?: User;
  ownedByUserId?: string;
  product?: Product;
  ownedByProductId?: string;
  createdAt: string;
  updatedAt: string;
}
