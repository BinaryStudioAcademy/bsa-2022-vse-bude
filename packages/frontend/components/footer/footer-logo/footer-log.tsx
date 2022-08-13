import Image from 'next/image';
import * as styles from './styles';
import footerlogo from '../../../public/images/footer/footer-logo.svg';

export const FooterLogo = (): JSX.Element => {
  return (
    <div css={styles.footerLogo}>
      <Image
        src={footerlogo}
        width={145}
        height={36}
        layout="fixed"
        alt="logo"
      />
    </div>
  );
};
