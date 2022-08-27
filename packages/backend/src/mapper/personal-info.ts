import type { Address, SocialMedia } from '@prisma/client';
import type { GetPersonlInfo, MapAddress, MapSocialMedia } from '@types';

const socialMediaKeys = ['facebook', 'instagram', 'linkedin'];
const addressKeys = [
  'country',
  'region',
  'city',
  'address',
  'zip',
  'novaPoshtaRef',
];

const mapPersonalInfo = ({
  address,
  socialMedia,
}: {
  address: Address | null;
  socialMedia: SocialMedia[];
}): GetPersonlInfo => {
  const addressDto = <MapAddress>{};
  const socialMediaDto = <MapSocialMedia>{};
  const social = socialMedia.reduce((prev, link) => ({ ...prev, ...link }), {});
  socialMediaKeys.forEach((key) => {
    socialMediaDto[key] = social[key] ? social[key] : '';
  });
  addressKeys.forEach((key) => {
    addressDto[key] = address[key] ? address[key] : '';
  });
  
return { ...addressDto, ...socialMediaDto };
};

export { mapPersonalInfo };
