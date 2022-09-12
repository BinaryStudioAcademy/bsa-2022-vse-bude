import type { PrismaClient, Product } from '@prisma/client';
import { readFileSync } from 'fs';
import { PRODUCTS_FILE_NAME } from '../../config/config';

export const updateProduct = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${PRODUCTS_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Product[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.product.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.product.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          title: _dataJSON.title,
          description: _dataJSON.description,
          price: _dataJSON.price,
          recommendedPrice: _dataJSON.recommendedPrice,
          minimalBid: _dataJSON.minimalBid,
          imageLinks: _dataJSON.imageLinks,
          country: _dataJSON.country,
          city: _dataJSON.city,
          phone: _dataJSON.phone,
          type: _dataJSON.type,
          status: _dataJSON.status,
          endDate: _dataJSON.endDate,
          postDate: _dataJSON.postDate,
          cancelReason: _dataJSON.cancelReason,
          authorId: _dataJSON.authorId,
          categoryId: _dataJSON.categoryId,
          winnerId: _dataJSON.winnerId,
          views: _dataJSON.views,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.product.create({ data: _dataJSON });
    }
  }
};
