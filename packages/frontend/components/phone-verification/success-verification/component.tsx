import { useAppDispatch } from '@hooks';
import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import hand from 'public/images/mocup_hand3.png';
import { nextVerifyPhoneModal } from 'store/modals/actions';
import * as styles from '../styles';

const SuccessModal = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyPhoneModal());
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.success.headline')}</h3>
      <div css={styles.imgWrapper}>
        <Image width={255} height={255} src={hand.src} alt="MARK" />
      </div>
      <div css={styles.inputsWrappper}>
        <Button onClick={changeModal}>
          {t('common:verify.success.button.continue')}
        </Button>
      </div>
    </div>
  );
};

export { SuccessModal };
