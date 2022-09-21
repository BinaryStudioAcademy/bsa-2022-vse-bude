import { Button, Container } from '@components/primitives';
import { Routes } from '@enums';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import type { ErrorPageProps } from './types';
import * as styles from './styles';

export const ErrorPage = ({ statusCode, description }: ErrorPageProps) => {
  const { t } = useTranslation();
  const { push } = useRouter();

  return (
    <Container css={styles.wrapper}>
      <h1 css={styles.code}>{statusCode}</h1>
      <h2 css={styles.description}>{description}</h2>
      <Button variant="outlined" onClick={() => push(Routes.DEFAULT)}>
        {t('errors:buttons.goToHome')}
      </Button>
    </Container>
  );
};
