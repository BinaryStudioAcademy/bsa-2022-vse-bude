-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NEW', 'USED');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "condition" "Condition" NOT NULL DEFAULT 'NEW';
