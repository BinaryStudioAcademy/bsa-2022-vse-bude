import { Container } from '@primitives';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const RulesPageInner = () => {
  const { t } = useTranslation('rules');

  return (
    <Container>
      <header>
        <h3 css={styles.heading}>{t('generalRules.title')}</h3>
      </header>
      <p>{t('generalRules.policy')}</p>
    </Container>
  );
};
