import type React from 'react';
import { useState } from 'react';
import { Button } from '@primitives';
import { Input } from 'components/primitives/input';
import { ColumnHeader } from '../footer-common';
import type { FooterFormProps } from './types';
import * as styles from './styles';

export const FooterForm: React.FC<FooterFormProps> = ({
  header,
  description,
  button,
  nameLabel,
  emailLabel,
  descLabel,
  namePlaceholder,
  emailPlaceholder,
  descPlaceholder,
}) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    description: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const sendHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form css={styles.footerForm}>
      <div css={styles.footerFormRow}>
        <ColumnHeader>{header}</ColumnHeader>
        <span css={styles.footerFormDescription}>{description}</span>
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-fullname"
          label={nameLabel}
          name="fullName"
          value={form.fullName}
          type="text"
          placeholder={namePlaceholder}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-email"
          label={emailLabel}
          name="email"
          value={form.email}
          type="email"
          placeholder={emailPlaceholder}
          onChange={changeHandler}
          variant="secondary"
        />
      </div>

      <div css={styles.footerFormRow}>
        <Input
          id="footer-description"
          label={descLabel}
          name="description"
          value={form.description}
          type="text"
          placeholder={descPlaceholder}
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
          {button}
        </Button>
      </div>
    </form>
  );
};
