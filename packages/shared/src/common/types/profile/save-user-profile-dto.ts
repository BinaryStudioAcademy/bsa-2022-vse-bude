type SaveUserProfileDto = {
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  novaPoshtaRef?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
};

export type { SaveUserProfileDto };
