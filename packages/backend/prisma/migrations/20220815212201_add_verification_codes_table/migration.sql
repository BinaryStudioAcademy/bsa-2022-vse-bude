-- CreateEnum
CREATE TYPE "VerificationCodeType" AS ENUM ('PHONE', 'EMAIL');

-- CreateTable
CREATE TABLE "VerificationCode" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "type" "VerificationCodeType" NOT NULL,

    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);
