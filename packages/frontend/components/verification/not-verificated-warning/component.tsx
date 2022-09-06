import { Button } from '@components/primitives';
import { ApiRoutes, VerifyApiRoutes } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as styles from './styles';

export default function NotVerificatedWarning() {
  const { t } = useTranslation();
  const { push } = useRouter();

  return (
    <div css={styles.textWrapper}>
      <p css={styles.text}>{t('create-post:notVerified.text')}</p>
      <div css={styles.btnWrapper}>
        <Button
          onClick={() => push(ApiRoutes.AUTH + VerifyApiRoutes.VERIFY_PHONE)}
        >
          {t('create-post:notVerified.btn')}
        </Button>
      </div>
    </div>
  );
}
