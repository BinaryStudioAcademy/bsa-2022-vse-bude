import Image from 'next/future/image';
import logo from '../../../public/images/icons/logo.svg';
import * as styles from './styles';

export const Logo = () => (
  <div css={styles.logo}>
    <Image src={logo.src} priority fill alt="logo" />
  </div>
);
