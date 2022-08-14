import Image from 'next/image';
import footerlogo from '../../../public/images/footer/footer-logo.svg';
import * as styles from './styles';

export const FooterLogo = (): JSX.Element => (
  <div css={styles.footerLogo}>
    <Image src={footerlogo} width={145} height={36} layout="fixed" alt="logo" />
  </div>
);
