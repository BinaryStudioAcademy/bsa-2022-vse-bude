/*
  Warnings:

  - You are about to drop the column `novaPoshtaRef` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "novaPoshtaRef",
ADD COLUMN     "deliveryData" VARCHAR(1024);
