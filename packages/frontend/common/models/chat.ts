import type { ChatMember } from './chat-member';
import type { Message } from './message';
import type { Product } from './product';

export interface Chat {
  id: string;
  title: string;
  product: Product;
  productId: string;
  members: ChatMember[];
  messages: Message[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
