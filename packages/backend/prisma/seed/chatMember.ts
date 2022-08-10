import type { ChatMember, PrismaClient, User } from '@prisma/client';
import { CHAT_MEMBERS_NUMBER } from './config';
import { fakeChatMember } from './data/chatMember';

export const seedChatMember = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
) => {
  const existingChatMembers = await prismaClient.chatMember.findMany();
  const howManyToCreate = CHAT_MEMBERS_NUMBER - existingChatMembers.length;

  if (howManyToCreate <= 0) {
    return;
  }

  const existingChats = await prismaClient.chat.findMany();

  const data: ChatMember[] = await fakeChatMember(
    howManyToCreate,
    existingUsers,
    existingChats,
  );
  await prismaClient.chatMember.createMany({ data: data });
};
