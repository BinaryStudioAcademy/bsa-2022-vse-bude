import type { Address, PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { ADDRESS_FILE_NAME } from './../../config/config';

export const updateAddress = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${ADDRESS_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: Address[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.address.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.address.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          country: _dataJSON.country,
          region: _dataJSON.region,
          city: _dataJSON.city,
          address: _dataJSON.address,
          zip: _dataJSON.zip,
          deliveryData: _dataJSON.deliveryData,
          userId: _dataJSON.userId,
          createdAt: _dataJSON.createdAt,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.address.create({ data: _dataJSON });
    }
  }
};
