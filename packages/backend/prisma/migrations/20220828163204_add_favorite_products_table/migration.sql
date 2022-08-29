-- CreateTable
CREATE TABLE "FavoriteProducts" (
    "userId" UUID NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "FavoriteProducts_pkey" PRIMARY KEY ("userId","productId")
);

-- AddForeignKey
ALTER TABLE "FavoriteProducts" ADD CONSTRAINT "FavoriteProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteProducts" ADD CONSTRAINT "FavoriteProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
