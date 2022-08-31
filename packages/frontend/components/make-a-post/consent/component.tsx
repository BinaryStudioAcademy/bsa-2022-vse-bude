import { Button, Checkbox, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as styles from './styles';

export const ConsentModal = () => {
  const [value, setValue] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();

  const router = useRouter();
  useEffect(() => setIsVisible(true), []);

  const setAgree = () => {
    setValue(!value);
    setIsDisabled(!isDisabled);
  };

  return (
    <Modal visible={isVisible}>
      <div css={styles.innerWrapper}>
        {t('rules:createPostRules.policy')}
        <div css={styles.consentCheckbox}>
          <Checkbox
            label={t('rules:createPostRules.checkbox')}
            value={value}
            onChange={setAgree}
          ></Checkbox>
        </div>
        <div css={styles.consentButtons}>
          <Button
            variant="outlined"
            disabled={isDisabled}
            tooltip={
              isDisabled
                ? t('rules:createPostRules.tooltip.disabled')
                : t('rules:createPostRules.tooltip.enabled')
            }
            onClick={() => setIsVisible(false)}
          >
            {t('rules:createPostRules.button.accept')}
          </Button>
          <Button onClick={() => router.push('/')}>
            {t('rules:createPostRules.button.decline')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
