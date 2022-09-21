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

  const { t } = useTranslation();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const sendHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form noValidate css={styles.footerForm}>
      <div css={styles.footerFormRow}>
        <ColumnHeader>{t('common:footer.contactUs')}</ColumnHeader>
        <span css={styles.footerFormDescription}>
          {t('common:footer.form.formDescription')}
        </span>
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-fullname"
          label={t('common:footer.form.fullName')}
          name="fullName"
          value={form.fullName}
          type="text"
          placeholder={t('common:footer.form.fullNamePlaceholder')}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-email"
          label={t('common:footer.form.email')}
          name="email"
          value={form.email}
          type="email"
          placeholder={t('common:footer.form.emailPlaceholder')}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-description"
          label={t('common:footer.form.description')}
          name="description"
          value={form.description}
          type="text"
          placeholder={t('common:footer.form.descriptionPlaceholder')}
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
          {t('common:footer.form.send')}
        </Button>
      </div>
    </form>
  );
};
