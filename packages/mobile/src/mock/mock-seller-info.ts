import { SocialMediaType } from '@vse-bude/shared';

export const MOCK_SELLER = {
  firstName: 'Jysk.UA',
  phone: '+380999999999',
  avatar: '',
  socialMedia: [
    {
      id: '1',
      link: 'jusk_ua',
      socialMedia: SocialMediaType.FACEBOOK,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      link: 'jusk_ua',
      socialMedia: SocialMediaType.INSTAGRAM,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      link: 'jusk.ua',
      socialMedia: SocialMediaType.WEBSITE,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      link: 'jusk_ua',
      socialMedia: SocialMediaType.LINKEDIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
