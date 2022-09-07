type UserSignUpDto = {
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
};

export type { UserSignUpDto };
