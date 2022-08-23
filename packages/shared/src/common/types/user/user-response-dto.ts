export type UserResponseDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  id: string;
  role: string;
  updatedAt: number;
  createdAt: number;
};
