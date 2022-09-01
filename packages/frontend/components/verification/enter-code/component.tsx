import { IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import { Button, IconButton, Input } from '@primitives';
import { LinkButton } from 'components/primitives/link-button';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import hand from 'public/images/mocup_hand2.png';
import { hideVerifyModal, nextVerifyModal, previousVerifyModal } from 'store/verify/actions';
import * as styles from '../styles';

export default function EnterCodeModal() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const closeModal = (e) => {
    e.preventDefault();
    dispatch(hideVerifyModal());
  };
  
  const previousModal = (e) => {
    e.preventDefault();
    dispatch(previousVerifyModal());
  };

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyModal());
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterCode.headline')}</h3>
      <span>{t('common:verify.enterCode.description')}</span>
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
          label={t('common:verify.enterCode.input')}
          variant="primary"
          type="text"
          name="phone"
        />
        <Button onClick={changeModal}>
          {t('common:verify.enterCode.button.continue')}
        </Button>
      </div>

      <LinkButton size={'small'} onClickHook={closeModal}>
          {t('common:verify.enterCode.link.sendAgain')}
        </LinkButton>
    </div>
  );
}
