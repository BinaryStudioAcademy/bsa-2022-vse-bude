import { IconName } from '@enums';
import { useAppDispatch } from '@hooks';
import { Button, IconButton, Input } from '@primitives';
import { LinkButton } from 'components/primitives/link-button';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import hand from 'public/images/mocup_hand1.png';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import {
  nextVerifyPhoneModal,
  hideVerifyPhoneModal,
} from 'store/modals/actions';
import * as styles from '../styles';

interface ModalProps {
  phone: string;
}

const EnterPhoneModal = ({ phone }: ModalProps) => {
  const [tooltipText, setTooltipText] = useState('');
  const [phoneInput, setphoneInput] = useState(phone);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const closeModal = () => {
    dispatch(hideVerifyPhoneModal());
  };

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyPhoneModal());
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setphoneInput(e.target.value);
    if (e.target.value != phone) {
      setTooltipText(t('common:verify.enterPhone.tooltip'));
    } else {
      setTooltipText('');
    }
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterPhone.headline')}</h3>
      <span>{t('common:verify.enterPhone.description')}</span>
      <IconButton
        cssExtend={styles.xmark}
        icon={IconName.XMARK}
        onClick={closeModal}
        ariaLabel={t('common:components.modal.closeLabel')}
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
          value={phoneInput}
          onChange={handleOnChange}
        />
        <Button
          onClick={changeModal}
          disabled={!!tooltipText}
          tooltip={tooltipText}
        >
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
