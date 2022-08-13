import { FooterLogo } from '../footer-logo';
import { FooterContacts, FooterPolicy } from '../footer-links';
import { FooterForm } from '../footer-form';
import * as styles from './styles';

//add required values in props of Components

export const FooterContentWrapper = () => (
  <div css={styles.footerContentWrapper}>
    <div css={styles.links}>
      <FooterLogo />

      <FooterContacts header="" email="" phone="" />

      <FooterPolicy header="" path="" label="" />
    </div>

    <FooterForm
      header=""
      description=""
      button=""
      nameLabel=""
      emailLabel=""
      descLabel=""
      namePlaceholder=""
      emailPlaceholder=""
      descPlaceholder=""
    />
  </div>
);
