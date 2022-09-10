import Image from 'next/future/image';
import footerlogo from '../../../public/images/footer/footer-logo.svg';
import * as styles from './styles';

export const Logo = (): JSX.Element => (
  <div css={styles.footerLogo}>
    <Image src={footerlogo} width={145} height={36} alt="logo" />
  </div>
);
