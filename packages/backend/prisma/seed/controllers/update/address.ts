import type { PrismaClient, User } from '@prisma/client';
import { readFileSync } from 'fs';
import { USER_FILE_NAME } from '../../config/config';

export const updateUsers = async (prismaClient: PrismaClient) => {
  const path = `./prisma/seed/mockData/${USER_FILE_NAME}.json`;
  const file = readFileSync(path, 'utf-8');

  const usersJSON: User[] = JSON.parse(file);

  usersJSON.map(async (_userJSON) => {
    const user = await prismaClient.user.findUnique({
      where: {
        id: _userJSON.id,
      },
    });
    if (user) {
      await prismaClient.user.update({
        where: {
          id: _userJSON.id,
        },
        data: {
          email: _userJSON.email,
          phone: _userJSON.phone,
          firstName: _userJSON.firstName,
          lastName: _userJSON.lastName,
          avatar: _userJSON.avatar,
          role: _userJSON.role,
          createdAt: _userJSON.createdAt,
          passwordHash: _userJSON.passwordHash,
          phoneVerified: _userJSON.phoneVerified,
          emailVerified: _userJSON.emailVerified,
          updatedAt: _userJSON.updatedAt,
        },
      });
    } else {
      await prismaClient.user.create({ data: _userJSON });
    }
  });
};
