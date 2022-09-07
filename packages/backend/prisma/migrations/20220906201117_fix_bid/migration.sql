/*
  Warnings:

  - You are about to drop the column `deletedAd` on the `Bid` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bid" DROP COLUMN "deletedAd",
ADD COLUMN     "deletedAt" TIMESTAMP(0);
