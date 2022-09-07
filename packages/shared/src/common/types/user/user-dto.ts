type UserDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneVerified: boolean;
  emailVerified: boolean;
};

export type { UserDto };
