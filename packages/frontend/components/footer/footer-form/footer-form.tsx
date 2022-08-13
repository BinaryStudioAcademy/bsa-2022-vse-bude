import type React from 'react';
import { useState } from 'react';
import { Button } from '@primitives';
import { ColumnHeader, FooterInput } from '../footer-common';
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
        <FooterInput
          id="footer-fullname"
          label={nameLabel}
          name="fullName"
          value={form.fullName}
          type="text"
          autocomplete="off"
          placeholder={namePlaceholder}
          onChange={changeHandler}
        />
      </div>

      <div css={styles.footerFormRow}>
        <FooterInput
          id="footer-email"
          label={emailLabel}
          name="email"
          value={form.email}
          type="email"
          autocomplete="on"
          placeholder={emailPlaceholder}
          onChange={changeHandler}
        />
      </div>

      <div css={styles.footerFormRow}>
        <FooterInput
          id="footer-description"
          label={descLabel}
          name="description"
          value={form.description}
          type="text"
          autocomplete="off"
          placeholder={descPlaceholder}
          onChange={changeHandler}
        />
      </div>

      {/* button - prop disabled = type boolean, depends on sendHandler*/}
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
