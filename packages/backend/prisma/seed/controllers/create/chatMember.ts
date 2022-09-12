import type { Chat, ChatMember, PrismaClient, User } from '@prisma/client';
import { CHAT_MEMBERS_NUMBER } from '../../config/config';
import { fakeChatMember } from '../../data/chatMember';
import { CHAT_MEMBER_FILE_NAME } from './../../config/config';
import { writeFile } from './../../helpers/wtireFile';

export const seedChatMember = async (
  prismaClient: PrismaClient,
  existingUsers: User[],
  existingChats: Chat[],
): Promise<void> => {
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

  writeFile(CHAT_MEMBER_FILE_NAME, data);

  await prismaClient.chatMember.createMany({ data: data });
};
