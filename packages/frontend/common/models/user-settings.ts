import type { Language, Theme } from '@enums';
import type { User } from './user';

export interface UserSettings {
  id: string;
  language?: Language;
  theme?: Theme;
  enableEmailNotifications?: boolean;
  user: User;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
