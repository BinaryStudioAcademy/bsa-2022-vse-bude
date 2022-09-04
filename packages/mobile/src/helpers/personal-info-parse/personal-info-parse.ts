import {
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  SaveUserProfileDto,
  UserAddressDto,
  MappedLinks,
  DefaultInpValue,
  SocialMedia,
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
  novaPoshtaRef: '',
};

const DEFAULT_SOCIAL_PAYLOAD: MappedLinks = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

const DEFAULT_SOCIAL_UPDATE_PAYLOAD: SocialMedia[] = [
  {
    link: '',
    socialMedia: SocialMediaType.FACEBOOK,
  },
  {
    link: '',
    socialMedia: SocialMediaType.INSTAGRAM,
  },
  {
    link: '',
    socialMedia: SocialMediaType.LINKEDIN,
  },
];

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
    instagram,
    linkedin,
    facebook,
    password,
    newPassword,
    repeatPassword,
  } = data;

  const socialMedia: SocialMedia[] = [];

  DEFAULT_SOCIAL_UPDATE_PAYLOAD.forEach((item) => {
    switch (item.socialMedia) {
      case SocialMediaType.FACEBOOK:
        socialMedia.push({
          link: facebook,
          socialMedia: item.socialMedia,
        });
        break;
      case SocialMediaType.INSTAGRAM:
        socialMedia.push({
          link: instagram,
          socialMedia: item.socialMedia,
        });
        break;
      case SocialMediaType.LINKEDIN:
        socialMedia.push({
          link: linkedin,
          socialMedia: item.socialMedia,
        });
        break;
      default:
        break;
    }
  });

  return {
    firstName,
    lastName,
    email,
    phone: phone === DefaultInpValue.PHONE ? '' : phone,
    socialMedia,
    password,
    newPassword,
    repeatPassword,
  };
};

export { personalInfoParser, updatePersonalInfoParser };
