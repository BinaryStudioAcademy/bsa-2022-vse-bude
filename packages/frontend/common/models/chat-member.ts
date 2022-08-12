import type { Chat } from './chat';
import type { User } from './user';

export interface ChatMember {
  id: string;
  user: User;
  userId: string;
  chat: Chat;
  chatId: string;
  createdAt: string;
  updatedAt: string;
}
