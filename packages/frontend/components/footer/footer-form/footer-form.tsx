import type React from 'react';
import { useState } from 'react';
import { Button } from '@primitives';
import { ColumnHeader, FooterInput } from '../footer-common';
import * as styles from './styles';

//Add:
//ColumnHeader - textContent
//span under - textContent

//Inputs
//label - textContent
//placeholder - textContent
//button - prop disabled = type boolean
//button - textContent

export const FooterForm = () => {
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
        <ColumnHeader>{''}</ColumnHeader>
        <span css={styles.footerFormDescription}>{}</span>
      </div>

      <div css={styles.footerFormRow}>
        <FooterInput
          id="footer-fullname"
          label=""
          name="fullName"
          value={form.fullName}
          type="text"
          autocomplete="off"
          placeholder=""
          onChange={changeHandler}
        />
      </div>

      <div css={styles.footerFormRow}>
        <FooterInput
          id="footer-email"
          label=""
          name="email"
          value={form.email}
          type="email"
          autocomplete="on"
          placeholder=""
          onChange={changeHandler}
        />
      </div>

      <div css={styles.footerFormRow}>
        <FooterInput
          id="footer-description"
          label=""
          name="description"
          value={form.description}
          type="text"
          autocomplete="off"
          placeholder=""
          onChange={changeHandler}
        />
      </div>

      <div css={styles.footerFormRow}>
        <Button type="submit" variant="outlined" disabled onClick={sendHandler}>
          {}
        </Button>
      </div>
    </form>
  );
};
