import Image from 'next/future/image';
import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import postStamp from '../../public/images/postStamp.jpg';
import logoImg from '../../public/images/logo.png';
import * as styles from './styles';
import type { LayoutProps } from './types';

export const AuthLayout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <section css={styles.authSection}>
      <div css={styles.formWrapper}>{children}</div>

      <div css={styles.bgWrapper}>
        <div css={styles.flagBg}></div>
        <div css={styles.productWrapper}>
          <div css={styles.logo}>
            <Image
              width={185}
              priority
              height={46}
              src={logoImg.src}
              alt="logo"
            />
          </div>
          <div css={styles.productImgWrapper}>
            <Image fill priority src={postStamp.src} alt="post mark" />
            <div css={styles.popup}>
              <h6 css={styles.headline}>{t('auth:layout.title')}</h6>
              <p css={styles.text}>{t('auth:layout.description')}</p>
              <div css={styles.controlsWrapper}>
                <span css={styles.price}>
                  {t('public:uah', { value: 360 })}
                </span>
                <Button>{t('public:bet')}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
