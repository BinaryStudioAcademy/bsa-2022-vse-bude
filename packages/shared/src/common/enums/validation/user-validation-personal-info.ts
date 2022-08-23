const PersonalInfoValidationMessage = {
  FIRST_NAME_REQUIRED: 'First name is required',
  FIRST_NAME_MIN: 'First name should have a minimum of 2 symbols',
  FIRST_NAME_MAX: 'First name should have a maximum of 256 symbols',
  LAST_NAME_REQUIRED: 'Last name is required',
  LAST_NAME_MIN: 'Last name name should have a minimum of 2 symbols',
  LAST_NAME_MAX: 'Last name should have a maximum of 256 symbols',

  // EMAIL_REQUIRED: 'Email is required!',
  // EMAIL_WRONG: 'Email is wrong!',
  // PHONE_REQUIRED: 'Phone is required!',

  EMPTY_CURRENT_PASSWORD: 'Fill the password please!',
  NEW_PASSWORD:
    'Password should include at least one uppercase,one lowercase and one number',
  SPACES_IN_PASSWORD: 'Spaces are not allowed',
  REPEAT_PASSWORD:
    'Password should include at least one uppercase,one lowercase and one number',
  DIFFERENT_PASSWORDS: 'Passwords are not same',
} as const;

export { PersonalInfoValidationMessage };
