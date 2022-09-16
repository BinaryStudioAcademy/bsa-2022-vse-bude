import { IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import { IconButton } from '@primitives';
import { EmailVerification } from 'components/auth/verification/email-verification';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import hand from 'public/images/mocup_hand2.png';
import { previousVerifyEmailModal } from 'store/modals/actions';
import { useEffect } from 'react';
import * as styles from '../styles';
import { emailCodeResend } from '../../../store/auth';

interface ModalProps {
  email: string;
}

const EnterCodeModal = ({ email }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(emailCodeResend());
  }, [dispatch]);

  const previousModal = (e) => {
    e.preventDefault();
    dispatch(previousVerifyEmailModal());
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterCode.headline')}</h3>
      <span>
        {t('common:verify.enterCode.description')} {email}
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
        <EmailVerification />
      </div>
    </div>
  );
};

export { EnterCodeModal };
