import type { Chat } from './chat';
import type { User } from './user';

export interface Message {
  id: string;
  sender: User;
  senderId: string;
  chat: Chat;
  chatId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}
