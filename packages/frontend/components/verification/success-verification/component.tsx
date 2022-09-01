import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import hand from 'public/images/mocup_hand3.png';
import { nextVerifyModal } from 'store/verify/actions';
import * as styles from '../styles';

export default function SuccessModal() {
  const dispatch = useAppDispatch();
  const { variant } = useTypedSelector((state) => state.verify);
  const { t } = useTranslation();

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyModal());
    console.log(variant);
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
}
