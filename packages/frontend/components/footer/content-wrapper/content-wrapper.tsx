import { Row } from '@primitives';
import { useTranslation } from 'next-i18next';
import { Logo } from '../logo';
import { Contacts, Policy } from '../links';
import { Form } from '../form';
import * as styles from './styles';

export const ContentWrapper = () => {
  const { t } = useTranslation('footer');

  return (
    <Row css={styles.wrapper}>
      <div css={styles.logoLinks}>
        <Logo />
        <Contacts header={t('CONTACT')} email="email" phone="phone" />
        <Policy header={t('SECURITY')} label={t('SECURITY_LINK')} path="" />
      </div>
      <Form
        header={t('CONTACT_US')}
        description={t('FORM_DESCRIPTION')}
        nameLabel={t('FULL_NAME')}
        namePlaceholder={t('FULL_NAME_PLACEHOLDER')}
        emailLabel={t('EMAIL')}
        emailPlaceholder={t('EMAIL_PLACEHOLDER')}
        descLabel={t('DESCRIPTION')}
        descPlaceholder={t('DESCRIPTION_PLACEHOLDER')}
        button={t('SEND')}
      />
    </Row>
  );
};
