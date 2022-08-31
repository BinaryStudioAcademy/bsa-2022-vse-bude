import type {
  FullUserProfileDto,
  SaveUserProfileDto,
  UserAddressDto,
  MappedLinks,
} from '@vse-bude/shared';

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

  const social = socialMedia
    .reduce((prev, link) => {
      const key = link.socialMedia.toLowerCase();
      const path = link.link;
      prev.push({
        [key]: path,
      });
      return prev;
    }, [])
    .reduce((prev, link) => ({ ...prev, ...link }), {});

  const mappedSocialMedia = <MappedLinks>{};
  socialMediaKeys.forEach((key) => {
    mappedSocialMedia[key] = social[key] ? social[key] : '';
  });

  return {
    firstName,
    lastName,
    email,
    phone: phone || '',
    ...mappedAddress,
    ...mappedSocialMedia,
    password: '',
    newPassword: '',
    repeatPassword: '',
  };
};
