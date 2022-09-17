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
  nextVerifyEmailModal,
  hideVerifyEmailModal,
} from 'store/modals/actions';
import * as styles from '../styles';

interface ModalProps {
  email: string;
}

const EnterEmailModal = ({ email }: ModalProps) => {
  const [tooltipText, setTooltipText] = useState('');
  const [emailInput, setEmailInput] = useState(email);
  const dispatch = useAppDispatch();

  const { t } = useTranslation(['common', 'auth']);

  const closeModal = () => {
    dispatch(hideVerifyEmailModal());
  };

  const changeModal = (e) => {
    e.preventDefault();
    dispatch(nextVerifyEmailModal());
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    if (e.target.value != email) {
      setTooltipText(t('common:verify.enterEmail.tooltip'));
    } else {
      setTooltipText('');
    }
  };

  return (
    <div css={styles.innerWrapper}>
      <h3 css={styles.headline}>{t('common:verify.enterEmail.headline')}</h3>
      <span>{t('common:verify.enterEmail.description')}</span>
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
          label={t('common:verify.enterEmail.input')}
          variant="primary"
          type="text"
          name="email"
          value={emailInput}
          onChange={handleOnChange}
        />
        <Button
          onClick={changeModal}
          disabled={!!tooltipText}
          tooltip={tooltipText}
        >
          {t('common:verify.enterEmail.button.verify')}
        </Button>
      </div>

      <LinkButton size={'small'} onClickHook={closeModal}>
        {t('common:verify.enterEmail.link.later')}
      </LinkButton>
    </div>
  );
};

export { EnterEmailModal };
