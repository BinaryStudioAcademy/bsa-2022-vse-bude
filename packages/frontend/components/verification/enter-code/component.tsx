import { IconName } from '@enums';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button, IconButton, Input, InternalLink } from '@primitives';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import hand from 'public/images/mocup_hand2.png';
import { nextVerifyModal, previousVerifyModal } from 'store/verify/actions';
import * as styles from '../styles';

export default function EnterCodeModal() {
  const dispatch = useAppDispatch();
  const { variant } = useTypedSelector((state) => state.verify);
  const { t } = useTranslation();

  const previousModal = (e) => {
    e.preventDefault();
    dispatch(previousVerifyModal());
  };

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyModal());
    console.log(variant);
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('verify:enterCode.headline')}</h3>
      <span>{t('verify:enterCode.description')}</span>
      <IconButton
        cssExtend={styles.arrow}
        icon={IconName.ANGLE_LEFT}
        onClick={previousModal}
      />
      <div css={styles.imgWrapper}>
        <Image width={255} height={255} src={hand.src} alt="MARK" />
      </div>
      <div css={styles.inputsWrappper}>
        <Input
          label={t('verify:enterCode.input')}
          variant="primary"
          type="text"
          name="phone"
        />
        <Button onClick={changeModal}>
          {t('verify:enterCode.button.continue')}
        </Button>
      </div>

      <InternalLink
        variant="dashboard"
        label={t('verify:enterCode.link.sendAgain')}
        href={'#'}
      />
    </div>
  );
}
