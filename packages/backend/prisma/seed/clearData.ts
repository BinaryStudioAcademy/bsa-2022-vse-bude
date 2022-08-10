import { prismaClient } from './config/prismaClient';

export const clearData = async () => {
  try {
    //clear
    await prismaClient.address.deleteMany({});
    await prismaClient.userSettings.deleteMany({});
    await prismaClient.category.deleteMany({});
    await prismaClient.bid.deleteMany({});
    await prismaClient.chatMember.deleteMany({});
    await prismaClient.message.deleteMany({});
    await prismaClient.chat.deleteMany({});
    await prismaClient.socialMedia.deleteMany({});
    await prismaClient.product.deleteMany({});
    await prismaClient.user.deleteMany({});
  } catch (e) {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
};
