type SaveUserProfileDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  deliveryData?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  password?: string;
  newPassword?: string;
  repeatPassword?: string;
};

export type { SaveUserProfileDto };
