import { IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import { Button, IconButton, Input } from '@primitives';
import { LinkButton } from 'components/primitives/link-button';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import hand from 'public/images/mocup_hand1.png';
import { nextVerifyModal, hideVerifyModal } from 'store/modals/actions';
import * as styles from '../styles';

const EnterPhoneModal = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const closeModal = () => {
    dispatch(hideVerifyModal());
  };

  const changeModal = (e) => {
    e.preventDefault();    
    dispatch(nextVerifyModal());
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterPhone.headline')}</h3>
      <span>{t('common:verify.enterPhone.description')}</span>
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
          label={t('common:verify.enterPhone.input')}
          variant="primary"
          type="text"
          name="phone"
        />
        <Button onClick={changeModal}>
          {t('common:verify.enterPhone.button.verify')}
        </Button>
      </div>

      <LinkButton size={'small'} onClickHook={closeModal}>
        {t('common:verify.enterPhone.link.later')}
      </LinkButton>
    </div>
  );
};

export { EnterPhoneModal };
