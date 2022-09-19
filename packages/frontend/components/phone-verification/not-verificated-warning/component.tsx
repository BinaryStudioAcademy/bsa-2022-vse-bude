import { Button } from '@components/primitives';
import { useAppDispatch } from '@hooks';
import { useTranslation } from 'next-i18next';
import { showVerifyPhoneModal } from 'store/modals/actions';
import * as styles from './styles';

export default function PhoneNotVerificatedWarning() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div css={styles.textWrapper}>
      <p css={styles.text}>{t('create-post:notVerified.text')}</p>
      <div css={styles.btnWrapper}>
        <Button onClick={() => dispatch(showVerifyPhoneModal())}>
          {t('create-post:notVerified.btn')}
        </Button>
      </div>
    </div>
  );
}
