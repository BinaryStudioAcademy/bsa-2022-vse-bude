import { useTranslation } from 'next-i18next';
import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  PasswordInput,
  Column,
  Flex,
  Button,
  DownloadButton,
} from '@primitives';
import { SectionHeader, NestedLayout } from '../../common';
import noavatar from '../../../../public/images/noavatar.svg';
import flag from '../../../../public/images/flagBg.png';
import * as styles from './styles';

export const PersonalInfo = () => {
  const [form, setForm] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    novaposhta: '',
    instagram: '',
    linkedin: '',
    facebook: '',
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    country: '',
    region: '',
    city: '',
    zipCode: '',
  });

  const { handleSubmit } = useForm();

  const { t } = useTranslation();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSaveHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // const onCanselHandler = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  const onDownloadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    //const file = event.target.files;
  };

  return (
    <NestedLayout>
      <form css={styles.form} onSubmit={handleSubmit(onSaveHandler)}>
        <div css={styles.personalHeader}>
          <div css={styles.headerWrapper}>
            <div css={styles.flagWrapper}>
              <img css={styles.flag} src={flag.src} alt="flag" />
            </div>

            <div css={styles.avatarWrapper}>
              <img
                css={styles.avatar}
                src={!form.avatar ? noavatar.src : form.avatar}
                alt="avatar"
              />
              <DownloadButton
                id="profile-avatar"
                name="avatar"
                onChange={onDownloadAvatar}
              />
            </div>
          </div>
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button type="reset" variant="outlined">
              {t('personal-info:action.cancel')}
            </Button>
            <Button type="submit" onClick={onSaveHandler}>
              {t('personal-info:action.save')}
            </Button>
          </Flex>
        </div>

        <div css={styles.sections}>
          <Column css={styles.sectionRow}>
            <SectionHeader>
              {t('personal-info:headline.personalInfo')}
            </SectionHeader>
            <Flex css={styles.groupInputs}>
              <div css={styles.inputRow}>
                <Input
                  id="firstName-profile"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  variant="primary"
                  label={t('personal-info:label.firstName')}
                  placeholder={t('personal-info:placeholder.firstName')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="lastName-profile"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  variant="primary"
                  label={t('personal-info:label.lastName')}
                  placeholder={t('personal-info:placeholder.lastName')}
                  onChange={changeHandler}
                />
              </div>
            </Flex>
            <div css={styles.inputRow}>
              <Input
                id="email-profile"
                type="email"
                name="email"
                value={form.email}
                variant="primary"
                label={t('personal-info:label.email')}
                placeholder={t('personal-info:placeholder.email')}
                onChange={changeHandler}
              />
            </div>
            <div css={styles.inputRow}>
              <Input
                id="phone-profile"
                type="text"
                variant="primary"
                name="phone"
                value={form.phone}
                label={t('personal-info:label.phone')}
                placeholder={t('personal-info:placeholder.phone')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>{t('personal-info:headline.address')}</SectionHeader>

            <Flex css={styles.groupInputs}>
              <div css={styles.inputRow}>
                <Input
                  id="country-profile"
                  type="text"
                  name="country"
                  value={form.country}
                  variant="primary"
                  label={t('personal-info:label.country')}
                  placeholder={t('personal-info:placeholder.country')}
                  onChange={changeHandler}
                />
              </div>

              <div css={styles.inputRow}>
                <Input
                  id="region-profile"
                  type="text"
                  name="region"
                  value={form.region}
                  variant="primary"
                  label={t('personal-info:label.region')}
                  placeholder={t('personal-info:placeholder.region')}
                  onChange={changeHandler}
                />
              </div>
            </Flex>

            <Flex css={styles.groupInputs}>
              <div css={styles.inputRow}>
                <Input
                  id="city-profile"
                  type="text"
                  name="city"
                  value={form.city}
                  variant="primary"
                  label={t('personal-info:label.city')}
                  placeholder={t('personal-info:placeholder.city')}
                  onChange={changeHandler}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="zip-code-profile"
                  type="text"
                  name="zipCode"
                  value={form.zipCode}
                  variant="primary"
                  label={t('personal-info:label.zipCode')}
                  placeholder={t('personal-info:placeholder.zipCode')}
                  onChange={changeHandler}
                />
              </div>
            </Flex>

            <div css={styles.inputRow}>
              <Input
                id="novaposhta-profile"
                type="text"
                variant="primary"
                name="novaposhta"
                value={form.novaposhta}
                label={t('personal-info:label.novaPoshta')}
                placeholder={t('personal-info:placeholder.novaPoshta')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>
              {t('personal-info:headline.socialNetworks')}
            </SectionHeader>

            <div css={styles.inputRow}>
              <Input
                id="instagram-profile"
                type="text"
                variant="primary"
                name="instagram"
                value={form.instagram}
                label={t('personal-info:label.instagram')}
                placeholder={t('personal-info:placeholder.instagram')}
                onChange={changeHandler}
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="linkedin-profile"
                type="text"
                variant="primary"
                name="linkedin"
                value={form.linkedin}
                label={t('personal-info:label.linkedin')}
                placeholder={t('personal-info:placeholder.linkedin')}
                onChange={changeHandler}
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="facebook-profile"
                type="text"
                variant="primary"
                name="facebook"
                value={form.facebook}
                label={t('personal-info:label.facebook')}
                placeholder={t('personal-info:placeholder.facebook')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>
              {t('personal-info:headline.password')}
            </SectionHeader>
            <div css={styles.inputRow}>
              <PasswordInput
                id="current-password-profile"
                value={form.currentPassword}
                variant="primary"
                label={t('personal-info:label.currentPassword')}
                placeholder={t('personal-info:placeholder.currentPassword')}
                onChange={changeHandler}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="new-password-profile"
                value={form.newPassword}
                variant="primary"
                label={t('personal-info:label.newPassword')}
                placeholder={t('personal-info:placeholder.newPassword')}
                onChange={changeHandler}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="repeat-password-profile"
                value={form.repeatPassword}
                variant="primary"
                label={t('personal-info:label.repeatPassword')}
                placeholder={t('personal-info:placeholder.repeatPassword')}
                onChange={changeHandler}
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};
