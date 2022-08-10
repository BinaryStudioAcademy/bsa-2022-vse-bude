import type { Chat, ChatMember, PrismaClient, User } from '@prisma/client';
import { CHAT_MEMBERS_NUMBER } from './config';
import { fakeChatMember } from './data/chatMember';

export const seedChatMember = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingChats: Chat[],
) => {
  const existingChatMembers = await prismaClient.chatMember.findMany();
  const howManyToCreate = CHAT_MEMBERS_NUMBER - existingChatMembers.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const data: ChatMember[] = await fakeChatMember(
    howManyToCreate,
    existingUsers,
    existingChats,
  );
  await prismaClient.chatMember.createMany({ data: data });
};
