import uaImg from 'public/images/flags/ua.svg';
import enImg from 'public/images/flags/gb.svg';
import { useRouter } from 'next/router';
import Image from 'next/future/image';
import { Languages } from 'common/enums/languages';
import { Dropdown } from '../menu-dropdown';
import * as styles from './styles';

const dropdownLanguages = [
  { src: enImg, locale: Languages.EN },
  { src: uaImg, locale: Languages.UA },
];

export function FlagsDropdown() {
  const { push, asPath, locale } = useRouter();

  const getAltToImage = (locale: string): string => {
    if (locale === Languages.UA) return Languages.UA;
    if (locale === Languages.EN) return Languages.EN;

    return Languages.DEFAULT;
  };

  const getSrcToImage = (locale: string): string => {
    if (locale === Languages.UA) return uaImg.src;
    if (locale === Languages.EN) return enImg.src;

    return enImg.src;
  };

  return (
    <Dropdown
      cssExtend={styles.dropdown}
      options={dropdownLanguages.map((lang) => ({
        cssExtend: styles.option,
        image: {
          alt: lang.locale,
          src: lang.src,
          width: 40,
          height: 38,
          css: styles.optionImage,
        },
        disabled: locale === lang.locale,
        value: lang.locale,
        onClick: () => push(asPath, asPath, { locale: lang.locale }),
      }))}
    >
      <Image
        width={35}
        height={35}
        alt={getAltToImage(locale)}
        src={getSrcToImage(locale)}
        css={styles.imageBtn}
      />
    </Dropdown>
  );
}
