import Image from 'next/image';
import { Button } from '@primitives';
import postStamp from '../../public/images/postStamp.png';
import logoImg from '../../public/images/logo.png';
import flagBg from '../../public/images/flagBg.png';
import * as styles from './styles';
import type { LayoutProps } from './types';

export const AuthLayout = ({ children }: LayoutProps) => (
  <section css={styles.authSection}>
    <div css={styles.formWrapper}>{children}</div>

    <div css={styles.bgWrapper}>
      <Image layout="fill" objectFit="cover" src={flagBg.src} />
      <div css={styles.productWrapper}>
        <div css={styles.logo}>
          <Image width="185px" height="46px" src={logoImg.src} />
        </div>
        <div css={styles.productImgWrapper}>
          <Image layout="fill" objectFit="cover" src={postStamp.src} />
          <div css={styles.popup}>
            <h6 css={styles.headline}>Mark &quot;Russian Warship&quot;</h6>
            <p css={styles.text}>
              The stamp was made by Ukrposhta in 2022. The expression became
              famous during ...
            </p>
            <div css={styles.controlsWrapper}>
              <span css={styles.price}>360 UAH</span> <Button>Bet</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
