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
import { updateNews } from './controllers/update/news';
import { updateOrders } from './controllers/update/order';

(async (): Promise<void> => {
  await updateUsers(prismaClient);
  await updateUserSettings(prismaClient);
  await updateAddress(prismaClient);
  await updateCategory(prismaClient);
  await updateProduct(prismaClient);
  await updateSocialMedia(prismaClient);
  await updateBid(prismaClient);
  await updateChat(prismaClient);
  await updateChatMember(prismaClient);
  await updateMessage(prismaClient);
  await updateNews(prismaClient);
  await updateOrders(prismaClient);
})()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
