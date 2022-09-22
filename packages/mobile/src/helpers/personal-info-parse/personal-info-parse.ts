import {
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  SaveUserProfileDto,
  MappedLinks,
  SocialMediaType,
  SocialMedia,
} from '@vse-bude/shared';

type PersonalInfoParser = (user: FullUserProfileDto) => SaveUserProfileDto;
type UpdatePersonalInfoParser = (
  data: SaveUserProfileDto,
  currentSocialMedia: SocialMedia[],
) => UpdateFullUserProfileDto;

const DEFAULT_SOCIAL_PAYLOAD: MappedLinks = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

const personalInfoParser: PersonalInfoParser = (user) => {
  const { firstName, lastName, email, phone, socialMedia, userAddress } = user;

  const parsedAddress = {
    country: userAddress?.country || '',
    region: userAddress?.region || '',
    city: userAddress?.city || '',
    zip: userAddress?.zip || '',
    deliveryData: userAddress?.deliveryData || '',
  };

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
    phone: phone || '',
    ...parsedAddress,
    ...parsedSocial,
    password: '',
    newPassword: '',
    repeatPassword: '',
  };
};

const findSocialId = (
  arr: SocialMedia[],
  type: SocialMediaType,
): string | undefined => {
  const mediaItem = arr.find((item) => item.socialMedia === type);

  return mediaItem?.id;
};

const updatePersonalInfoParser: UpdatePersonalInfoParser = (
  data,
  currentSocialMedia,
) => {
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
      id: findSocialId(currentSocialMedia, SocialMediaType.FACEBOOK) || '',
      link: facebook || '',
      socialMedia: SocialMediaType.FACEBOOK,
    },
    {
      id: findSocialId(currentSocialMedia, SocialMediaType.INSTAGRAM) || '',
      link: instagram || '',
      socialMedia: SocialMediaType.INSTAGRAM,
    },
    {
      id: findSocialId(currentSocialMedia, SocialMediaType.LINKEDIN) || '',
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
    phone: phone ? `+380${phone}` : null,
    userAddress,
    socialMedia,
    password,
    newPassword,
    repeatPassword,
  };
};

export { personalInfoParser, updatePersonalInfoParser };
