import type { Role } from '@enums';
import type { Address } from './address';
import type { Bid } from './bid';
import type { ChatMember } from './chat-member';
import type { Message } from './message';
import type { Product } from './product';
import type { SocialMedia } from './social-media';
import type { UserSettings } from './user-settings';

export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: Role;
  settings?: UserSettings;
  refreshTokens: string;
  address?: Address;
  socialMedia: SocialMedia[];
  ownProducts: Product[];
  wonProducts: Product[];
  bids: Bid[];
  chats: ChatMember[];
  messages: Message[];
  createdAt: string;
  passwordHash: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  updatedAt: string;
}
