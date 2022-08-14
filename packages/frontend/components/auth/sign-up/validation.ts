import type { RegisterOptions } from 'react-hook-form';

export const phoneMask = /\+380[1-9][0-9]{8}/;
export const emailMask = /([0-9a-z.]+)@([0-9a-z.]+)\.([0-9a-z]{2,})/;

export const maxNameLength = 50;
export const minPasswordLength = 6;
export const maxPasswordLength = 50;

export const nameValidation: RegisterOptions = {
  required: true,
  maxLength: maxNameLength,
};

export const passwordValidation: RegisterOptions = {
  required: true,
  minLength: minPasswordLength,
  maxLength: maxPasswordLength,
};

export const repeatPasswordValidation: RegisterOptions = {
  required: true,
  minLength: minPasswordLength,
  maxLength: maxPasswordLength,
};

export const phoneValidation: RegisterOptions = {
  required: true,
  pattern: phoneMask,
};

export const emailValidation: RegisterOptions = {
  required: true,
  pattern: emailMask,
};
