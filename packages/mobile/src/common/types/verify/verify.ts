type VerifyPhoneRequestDto = {
  phone: string;
};

type VerifyEmailRequestDto = {
  email: string;
};

type PropsVerifyScreens = {
  route: {
    params: {
      fromSignUp?: boolean;
    };
  };
};

export type {
  VerifyPhoneRequestDto,
  VerifyEmailRequestDto,
  PropsVerifyScreens,
};
