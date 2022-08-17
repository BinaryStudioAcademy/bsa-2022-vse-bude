import { useTranslation } from 'next-i18next';
import type React from 'react';
import { useState } from 'react';
import { Input, PasswordInput, Column, Flex } from '@primitives';
import { SectionHeader, NestedLayout } from '../../common';
import * as styles from './styles';

export const PersonalInfo = () => {
  const [form, setForm] = useState({
    firsName: '',
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

  const { t } = useTranslation('personal-info');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

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
          <Column css={styles.sectionRow}>
            <SectionHeader>{t('PERSONAL_INFO')}</SectionHeader>
            <Flex>
              <div css={styles.inputRow}>
                <Input
                  id="firstName-profile"
                  type="text"
                  name="firstName"
                  value={form.firsName}
                  variant="primary"
                  label={t('LABEL_FIRST_NAME')}
                  placeholder={t('PLACEHOLDER_FIRST_NAME')}
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
                  label={t('LABEL_LAST_NAME')}
                  placeholder={t('PLACEHOLDER_LAST_NAME')}
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
                label={t('LABEL_EMAIL')}
                placeholder={t('PLACEHOLDER_EMAIL')}
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
                label={t('LABEL_PHONE')}
                placeholder={t('PLACEHOLDER_PHONE')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>{t('ADDRESS')}</SectionHeader>

            <Flex>
              <div css={styles.inputRow}>
                <Input
                  id="country-profile"
                  type="text"
                  name="country"
                  value={form.country}
                  variant="primary"
                  label={t('LABEL_COUNTRY')}
                  placeholder={t('PLACEHOLDER_COUNTRY')}
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
                  label={t('LABEL_REGION')}
                  placeholder={t('PLACEHOLDER_REGION')}
                  onChange={changeHandler}
                />
              </div>
            </Flex>

            <Flex>
              <div css={styles.inputRow}>
                <Input
                  id="city-profile"
                  type="text"
                  name="city"
                  value={form.city}
                  variant="primary"
                  label={t('LABEL_CITY')}
                  placeholder={t('PLACEHOLDER_CITY')}
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
                  label={t('LABEL_ZIP_CODE')}
                  placeholder={t('PLACEHOLDER_ZIP_CODE')}
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
                label={t('NOVA_POSHTA')}
                placeholder={t('NOVA_POSHTA_PLACEHOLDER')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>{t('SOCIAL_NETWORKS')}</SectionHeader>

            <div css={styles.inputRow}>
              <Input
                id="instagram-profile"
                type="text"
                variant="primary"
                name="instagram"
                value={form.instagram}
                label={t('LABEL_INSTAGRAM')}
                placeholder={t('PLACEHOLDER_INSTAGRAM')}
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
                label={t('LABEL_LINKEDIN')}
                placeholder={t('PLACEHOLDER_LINKEDIN')}
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
                label={t('LABEL_FACEBOOK')}
                placeholder={t('PLACEHOLDER_FACEBOOK')}
                onChange={changeHandler}
              />
            </div>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>{t('PASSWORD')}</SectionHeader>
            <div css={styles.inputRow}>
              <PasswordInput
                id="current-password-profile"
                value={form.currentPassword}
                variant="primary"
                label={t('LABEL_CURRENT_PASSWORD')}
                placeholder={t('PLACEHOLDER__CURRENT_PASSWORD')}
                onChange={changeHandler}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="new-password-profile"
                value={form.newPassword}
                variant="primary"
                label={t('LABEL_NEW_PASSWORD')}
                placeholder={t('PLACEHOLDER__NEW_PASSWORD')}
                onChange={changeHandler}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="repeat-password-profile"
                value={form.repeatPassword}
                variant="primary"
                label={t('LABEL_REPEAT_PASSWORD')}
                placeholder={t('PLACEHOLDER__REPEAT_PASSWORD')}
                onChange={changeHandler}
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};
