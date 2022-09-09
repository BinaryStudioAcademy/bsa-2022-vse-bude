import type { Request } from 'express';
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
  userNameValidation,
  addressValidation,
} from '../sub-validation';

export const profileValidation = ({ req }: { req: Request }): void => {
  userNameValidation({ req });
  emailValidation({ req });
  passwordValidation({ req });
  phoneValidation({ req });
  addressValidation({ req });
};
