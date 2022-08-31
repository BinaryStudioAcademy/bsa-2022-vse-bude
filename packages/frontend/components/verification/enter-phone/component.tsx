import { IconName } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button, IconButton, Input, InternalLink } from '@primitives';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import hand from 'public/images/mocup_hand1.png';
import { nextVerifyModal, hideVerifyModal } from 'store/verify/actions';
import * as styles from '../styles';

export default function EnterPhoneModal() {
  const dispatch = useAppDispatch();
  const { variant } = useTypedSelector((state) => state.verify);

  const { t } = useTranslation();

  const closeModal = (e) => {
    e.preventDefault();
    dispatch(hideVerifyModal());
  };

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyModal());
    console.log(variant);
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('verify:enterPhone.headline')}</h3>
      <span>{t('verify:enterPhone.description')}</span>
      <IconButton
        cssExtend={styles.xmark}
        icon={IconName.XMARK}
        onClick={closeModal}
      />
      <div css={styles.imgWrapper}>
        <Image width={255} height={255} src={hand.src} alt="MARK" />
      </div>
      <div css={styles.inputsWrappper}>
        <Input
          label={t('verify:enterPhone.input')}
          variant="primary"
          type="text"
          name="phone"
        />
        <Button onClick={changeModal}>
          {t('verify:enterPhone.button.verify')}
        </Button>
      </div>

      <InternalLink
        variant="dashboard"
        label={t('verify:enterPhone.link.later')}
        href={'#'}
      />
    </div>
  );
}
