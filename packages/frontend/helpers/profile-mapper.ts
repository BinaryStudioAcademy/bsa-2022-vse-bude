import type {
  FullUserProfileDto,
  UpdateFullUserProfileDto,
  SaveUserProfileDto,
  UserAddressDto,
  MappedLinks,
  SocialMedia,
} from '@vse-bude/shared';
import {
  DefaultInpValue,
  SocialMediaType,
  PHONE,
  PERSONAL_PHONE,
} from '@vse-bude/shared';

const addressKeys: string[] = [
  'country',
  'region',
  'city',
  'zip',
  'deliveryData',
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
    phone: !phone ? '' : phone,
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

  let isAddressNull = true;
  const addressDto = { country, region, city, zip, deliveryData };
  const mappedAddress: UserAddressDto = {};
  addressKeys.forEach((key) => {
    if (addressDto[key]) {
      mappedAddress[key] = addressDto[key] ? addressDto[key] : null;
      isAddressNull = false;
    } else {
      mappedAddress[key] = '';
    }
  });

  const updatedPhone = ({ phone }: { phone: string }): string | null => {
    if (!phone) return null;
    const isPhone = PHONE.test(phone);
    if (isPhone) return phone;
    const isPersonalPhone = PERSONAL_PHONE.test(phone);
    if (isPersonalPhone) {
      return DefaultInpValue.PHONE + phone;
    }
  };

  return {
    firstName,
    lastName,
    email,
    phone: updatedPhone({ phone }),
    userAddress: !isAddressNull ? mappedAddress : null,
    socialMedia,
    password,
    newPassword,
    repeatPassword,
  };
};
