import { Request } from 'express';
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
  userNameValidation,
} from './sub-validation';

export const profileValidation = ({ req }: { req: Request }) => {
  userNameValidation({ req });
  emailValidation({ req });
  passwordValidation({ req });
  phoneValidation({ req });
};
