import { useTranslation } from 'next-i18next';
// import type React from 'react';
// import { useState } from 'react';
import { Input, Column, Flex } from '@primitives';
import { SectionHeader, NestedLayout } from '../../common';
import * as styles from './styles';

export const PersonalInfo = () => {
  // const [form, setForm] = useState({
  //   firsName: '',
  //   secondName: '',
  //   email: '',
  //   phone: '',
  // });
  const { t } = useTranslation('personal-info');
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  // const onSaveHandler = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  // const onCanselHandler = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  return (
    <NestedLayout>
      <form style={{ width: '800px' }}>
        <div>
          <Column>
            <SectionHeader>{t('PERSONAL_INFO')}</SectionHeader>

            <Flex>
              <div css={styles.inputRow}>
                <Input
                  type="text"
                  variant="primary"
                  label={t('LABEL_FIRST_NAME')}
                  placeholder={t('PLACEHOLDER_FIRST_NAME')}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  type="text"
                  variant="primary"
                  label={t('LABEL_LAST_NAME')}
                  placeholder={t('PLACEHOLDER_LAST_NAME')}
                />
              </div>
            </Flex>
            <div css={styles.inputRow}>
              <Input
                type="text"
                variant="primary"
                label={t('LABEL_EMAIL')}
                placeholder={t('PLACEHOLDER_EMAIL')}
              />
            </div>
            <div>
              <Input
                type="text"
                variant="primary"
                label={t('LABEL_PHONE')}
                placeholder={t('PLACEHOLDER_PHONE')}
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};
