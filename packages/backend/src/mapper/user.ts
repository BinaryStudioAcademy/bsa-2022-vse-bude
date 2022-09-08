import type { User } from '@prisma/client';

export const userMap = (user: User) => ({
  id: user.id,
  firstName: user.firstName,
  lastName: user.lastName,
  phone: user.phone,
  email: user.email,
  avatar: user.avatar,
  role: user.role,
  createdAt: user.createdAt.getTime(),
  updatedAt: user.updatedAt.getTime(),
  phoneVerified: user.phoneVerified,
  emailVerified: user.emailVerified,
});
