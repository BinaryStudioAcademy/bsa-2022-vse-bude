import type React from 'react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Button } from '@primitives';
import { Input } from 'components/primitives/input';
import { ColumnHeader } from '../common';
import * as styles from './styles';

export const Form = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    description: '',
  });

  const { t } = useTranslation('footer');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const sendHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form css={styles.footerForm}>
      <div css={styles.footerFormRow}>
        <ColumnHeader>{t('CONTACT_US')}</ColumnHeader>
        <span css={styles.footerFormDescription}>{t('FORM_DESCRIPTION')}</span>
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-fullname"
          label={t('FULL_NAME')}
          name="fullName"
          value={form.fullName}
          type="text"
          placeholder={t('FULL_NAME_PLACEHOLDER')}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-email"
          label={t('EMAIL')}
          name="email"
          value={form.email}
          type="email"
          placeholder={t('EMAIL_PLACEHOLDER')}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-description"
          label={t('DESCRIPTION')}
          name="description"
          value={form.description}
          type="text"
          placeholder={t('DESCRIPTION_PLACEHOLDER')}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Button
          type="submit"
          variant="outlined"
          onClick={sendHandler}
          disabled={false}
        >
          {t('SEND')}
        </Button>
      </div>
    </form>
  );
};
