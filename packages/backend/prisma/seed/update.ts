import { updateUserSettings } from './controllers/update/userSettings';
import { updateSocialMedia } from './controllers/update/socialMedia';
import { updateProduct } from './controllers/update/product';
import { updateMessage } from './controllers/update/message';
import { updateChatMember } from './controllers/update/chatMember';
import { updateChat } from './controllers/update/chat';
import { updateCategory } from './controllers/update/category';
import { updateBid } from './controllers/update/bid';
import { prismaClient } from './config/prismaClient';
import { updateAddress } from './controllers/update/address';
import { updateUsers } from './controllers/update/user';

(async () => {
  await updateAddress(prismaClient);
  await updateBid(prismaClient);
  await updateCategory(prismaClient);
  await updateChat(prismaClient);
  await updateChatMember(prismaClient);
  await updateMessage(prismaClient);
  await updateProduct(prismaClient);
  await updateSocialMedia(prismaClient);
  await updateUsers(prismaClient);
  await updateUserSettings(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
