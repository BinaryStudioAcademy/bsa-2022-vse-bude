import type { PrismaClient, User } from '@prisma/client';
import { readFileSync } from 'fs';
import { USER_FILE_NAME } from '../../config/config';

export const updateUsers = async (
  prismaClient: PrismaClient,
): Promise<void> => {
  const path = `./prisma/seed/mockData/${USER_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const data: User[] = JSON.parse(file);

  for (const _dataJSON of data) {
    const record = await prismaClient.user.findUnique({
      where: {
        id: _dataJSON.id,
      },
    });
    if (record) {
      await prismaClient.user.update({
        where: {
          id: _dataJSON.id,
        },
        data: {
          email: _dataJSON.email,
          phone: _dataJSON.phone,
          firstName: _dataJSON.firstName,
          lastName: _dataJSON.lastName,
          avatar: _dataJSON.avatar,
          role: _dataJSON.role,
          createdAt: _dataJSON.createdAt,
          passwordHash: _dataJSON.passwordHash,
          phoneVerified: _dataJSON.phoneVerified,
          emailVerified: _dataJSON.emailVerified,
          updatedAt: _dataJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.user.create({ data: _dataJSON });
    }
  }
};
