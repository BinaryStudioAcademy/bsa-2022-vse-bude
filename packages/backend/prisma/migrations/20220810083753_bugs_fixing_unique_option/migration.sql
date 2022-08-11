/*
  Warnings:

  - You are about to drop the column `firebaseUid` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Bid_bidderId_key";

-- DropIndex
DROP INDEX "Bid_productId_key";

-- DropIndex
DROP INDEX "ChatMember_chatId_key";

-- DropIndex
DROP INDEX "ChatMember_userId_key";

-- DropIndex
DROP INDEX "Message_chatId_key";

-- DropIndex
DROP INDEX "Message_senderId_key";

-- DropIndex
DROP INDEX "Product_authorId_key";

-- DropIndex
DROP INDEX "Product_categoryId_key";

-- DropIndex
DROP INDEX "Product_winnerId_key";

-- DropIndex
DROP INDEX "SocialMedia_ownedByProductId_key";

-- DropIndex
DROP INDEX "SocialMedia_ownedByUserId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");
