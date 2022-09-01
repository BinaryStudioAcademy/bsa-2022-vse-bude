import type {
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  SaveUserProfileDto,
  UserAddressDto,
  MappedLinks,
  SocialMedia,
} from '@vse-bude/shared';
import { DefaultInpValue } from '@vse-bude/shared';
import { SocialMediaType } from '@vse-bude/shared';

const addressKeys: string[] = [
  'country',
  'region',
  'city',
  'zip',
  'novaPoshtaRef',
];
const socialMediaKeys: string[] = ['facebook', 'instagram', 'linkedin'];

export const profileMapper = ({
  user,
}: {
  user: FullUserProfileDto;
}): SaveUserProfileDto => {
  const { firstName, lastName, email, phone, socialMedia, userAddress } = user;

  const mappedAddress = <UserAddressDto>{};

  !userAddress
    ? addressKeys.forEach((key) => {
        mappedAddress[key] = '';
      })
    : addressKeys.forEach((key) => {
        mappedAddress[key] = userAddress[key] ? userAddress[key] : '';
      });

  const social = socialMedia.reduce((prev, link) => {
    const key = link.socialMedia.toLowerCase();
    const path = link.link;
    prev = {
      ...prev,
      [key]: path,
    };

    return prev;
  }, {});

  const mappedSocialMedia = <MappedLinks>{};
  socialMediaKeys.forEach((key) => {
    mappedSocialMedia[key] = social[key] ? social[key] : '';
  });

  return {
    firstName,
    lastName,
    email,
    phone: phone || DefaultInpValue.PHONE,
    ...mappedAddress,
    ...mappedSocialMedia,
    password: '',
    newPassword: '',
    repeatPassword: '',
  };
};

export const updateDtoMapper = ({
  data,
  currentLinks,
}: {
  data: SaveUserProfileDto;
  currentLinks: SocialMedia[];
}): UpdateFullUserProfileDto => {
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

  const formLinks: MappedLinks = { instagram, linkedin, facebook };
  const socialMedia: SocialMedia[] = [];
  for (const key in formLinks) {
    const socialNetwork = currentLinks.find(
      (it) => it.socialMedia === key.toUpperCase(),
    );
    if (socialNetwork) {
      const linkToUpd = { ...socialNetwork, link: formLinks[key] };
      socialMedia.push(linkToUpd);
    } else if (formLinks[key].trim()) {
      socialMedia.push({
        link: formLinks[key],
        socialMedia: SocialMediaType[key.toUpperCase()],
      });
    }
  }

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
