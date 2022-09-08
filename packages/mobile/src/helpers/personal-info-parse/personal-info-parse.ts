import {
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  SaveUserProfileDto,
  UserAddressDto,
  MappedLinks,
  DefaultInpValue,
  SocialMediaType,
} from '@vse-bude/shared';

type PersonalInfoParser = (user: FullUserProfileDto) => SaveUserProfileDto;
type UpdatePersonalInfoParser = (
  data: SaveUserProfileDto,
) => UpdateFullUserProfileDto;

const DEFAULT_ADDRESS_PAYLOAD: UserAddressDto = {
  country: '',
  region: '',
  city: '',
  zip: '',
  deliveryData: '',
};

const DEFAULT_SOCIAL_PAYLOAD: MappedLinks = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

const personalInfoParser: PersonalInfoParser = (user) => {
  const { firstName, lastName, email, phone, socialMedia, userAddress } = user;

  const parsedAddress = DEFAULT_ADDRESS_PAYLOAD;

  if (userAddress && Object.keys(userAddress).length > 0) {
    Object.keys(userAddress).forEach((key) => {
      parsedAddress[key as keyof UserAddressDto] =
        userAddress[key as keyof UserAddressDto];
    });
  }

  const parsedSocial = socialMedia.reduce((prev, item) => {
    const key = item.socialMedia?.toLowerCase();
    const path = item.link;

    return {
      ...prev,
      [key as string]: path,
    };
  }, DEFAULT_SOCIAL_PAYLOAD);

  return {
    firstName,
    lastName,
    email,
    phone: phone || DefaultInpValue.PHONE,
    ...parsedAddress,
    ...parsedSocial,
    password: '',
    newPassword: '',
    repeatPassword: '',
  };
};

const updatePersonalInfoParser: UpdatePersonalInfoParser = (data) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    region,
    city,
    zip,
    deliveryData,
    instagram,
    linkedin,
    facebook,
    password,
    newPassword,
    repeatPassword,
  } = data;

  const socialMedia = [
    {
      link: facebook || '',
      socialMedia: SocialMediaType.FACEBOOK,
    },
    {
      link: instagram || '',
      socialMedia: SocialMediaType.INSTAGRAM,
    },
    {
      link: linkedin || '',
      socialMedia: SocialMediaType.LINKEDIN,
    },
  ];

  const userAddress = {
    country: country || '',
    region: region || '',
    city: city || '',
    zip: zip || '',
    deliveryData: deliveryData || '',
  };

  return {
    firstName,
    lastName,
    email,
    phone: phone === DefaultInpValue.PHONE ? '' : phone,
    userAddress,
    socialMedia,
    password,
    newPassword,
    repeatPassword,
  };
};

export { personalInfoParser, updatePersonalInfoParser };
