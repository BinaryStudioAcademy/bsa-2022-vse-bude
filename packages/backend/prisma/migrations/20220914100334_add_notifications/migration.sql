-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('PRODUCT_SOLD', 'AUCTION_ENDED', 'OUTBID', 'BID_PLACED', 'INFO');

-- CreateTable
CREATE TABLE "Notifications" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "productId" UUID,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
