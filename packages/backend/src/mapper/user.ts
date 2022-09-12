import type { User } from '@prisma/client';
import type { UserResponseDto } from '@vse-bude/shared';

export const userMap = (user: User): UserResponseDto => ({
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
