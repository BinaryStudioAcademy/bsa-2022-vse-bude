import Image from 'next/image';
import logo from '../../../public/images/icons/logo.svg';
import * as styles from './styles';

export const Logo = () => (
  <div css={styles.logo}>
    <Image src={logo.src} priority layout="fill" alt="logo" />
  </div>
);
