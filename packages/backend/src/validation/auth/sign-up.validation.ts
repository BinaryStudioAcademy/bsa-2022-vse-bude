import type { Request } from 'express';
import {
  emailValidation,
  signupPasswordValidation,
  phoneValidation,
  userNameValidation,
} from '../sub-validation';

export const signupValidation = ({ req }: { req: Request }): void => {
  userNameValidation({ req });
  emailValidation({ req });
  signupPasswordValidation({ req });
  phoneValidation({ req });
};
