type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  passwordHash: string;
};

export type { CreateUser };
