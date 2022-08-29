import { Button, Checkbox, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as styles from './styles';

export const ConsentModal = () => {
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();
  useEffect(() => setIsVisible(true), []);

  const setAgree = () => {
    setValue(!value);
    setDisabled(!disabled);
  };

  return (
    <React.Fragment>
      <Modal visible={isVisible}>
        {t('rules:createPostRules.policy')}
        <div css={styles.consentCheckbox}>
          <Checkbox label={t('rules:createPostRules.checkbox')} value={value} onChange={setAgree}></Checkbox>
        </div>
        <div css={styles.consentButtons}>
          <Button
            variant="outlined"
            disabled={disabled}
            onClick={() => setIsVisible(false)}
          >
            {t('rules:createPostRules.button.accept')}
          </Button>
          <Button onClick={() => router.push('/')}>{t('rules:createPostRules.button.decline')}</Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
