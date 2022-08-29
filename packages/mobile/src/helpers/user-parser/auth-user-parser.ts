import { UserDto, UserResponseDto } from '@vse-bude/shared';

const authUserParser = (user: UserResponseDto): UserDto => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    phoneVerified: user.phoneVerified,
    avatar: user?.avatar || '',
  };
};

export { authUserParser };
