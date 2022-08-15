import Image from 'next/image';
import logo from '../../../public/images/icons/logo.svg';

export const Logo = () => (
  <Image src={logo.src} width={128} height={32} alt="logo" />
);
