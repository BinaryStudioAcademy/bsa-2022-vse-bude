-- CreateEnum
CREATE TYPE "Wear" AS ENUM ('NEW', 'USED');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "wear" "Wear" NOT NULL DEFAULT 'NEW';
