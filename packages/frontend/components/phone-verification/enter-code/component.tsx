import { IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import { IconButton } from '@primitives';
import { PhoneVerification } from 'components/auth/verification/phone-verification';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import hand from 'public/images/mocup_hand2.png';
import { previousVerifyPhoneModal } from 'store/modals/actions';
import { useEffect } from 'react';
import * as styles from '../styles';
import { phoneCodeResend } from '../../../store/auth';

interface ModalProps {
  phone: string;
}

const EnterCodeModal = ({ phone }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(phoneCodeResend());
  }, [dispatch]);

  const previousModal = (e) => {
    e.preventDefault();
    dispatch(previousVerifyPhoneModal());
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterCode.headline')}</h3>
      <span>
        {t('common:verify.enterCode.description')} {phone}
      </span>
      <IconButton
        cssExtend={styles.arrow}
        icon={IconName.ANGLE_LEFT}
        onClick={previousModal}
        ariaLabel={t('common:components.slider.prevStep')}
      />
      <div css={styles.imgWrapper}>
        <Image width={255} height={255} src={hand.src} alt="MARK" />
      </div>
      <div css={styles.inputsWrappper}>
        <PhoneVerification />
      </div>
    </div>
  );
};

export { EnterCodeModal };
