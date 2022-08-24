import { useTranslation } from 'next-i18next';
import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  Input,
  PasswordInput,
  Column,
  Flex,
  Button,
  DownloadButton,
} from '@primitives';
import { userUpdateSchema } from 'validation-schemas/user/user-update';
import type { UserPersonalInfoDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import flag from '../../../../public/images/flagBg.png';
import { SectionHeader, NestedLayout } from '../../common';
import * as styles from './styles';

export const PersonalInfo = () => {
  const { t } = useTranslation();

  const {
    register,
    reset,
    setValue,
    setError,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPersonalInfoDto>({
    defaultValues: {
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      region: '',
      country: '',
      zip: '',
      novaPoshtaRef: '',
      linkedin: '',
      facebook: '',
      instagram: '',
      password: '',
      newPassword: '',
      repeatPassword: '',
    },
    resolver: joiResolver(userUpdateSchema(t)),
  });

  const avatar = watch('avatar');

  const onSave: SubmitHandler<UserPersonalInfoDto> = (data, event) => {
    event.preventDefault();
    console.log('data', data);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value.includes(' ')
      ? setError('newPassword', {
          type: 'custom',
          message: t(UserPersonalInfoValidationMessage.SPACES_IN_PASSWORD),
        })
      : setValue('newPassword', event.target.value);
  };

  const onResetHandler = () => {
    reset(
      {
        avatar: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        region: '',
        country: '',
        zip: '',
        novaPoshtaRef: '',
        linkedin: '',
        facebook: '',
        instagram: '',
        password: '',
        newPassword: '',
        repeatPassword: '',
      },
      {
        keepDefaultValues: true,
      },
    );
  };

  const onCutHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onCopyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onPastHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };

  return (
    <NestedLayout>
      <form css={styles.form} onSubmit={handleSubmit(onSave)}>
        <div css={styles.personalHeader}>
          <div css={styles.headerWrapper}>
            <div css={styles.flagWrapper}>
              <img css={styles.flag} src={flag.src} alt="flag" />
            </div>

            <div css={styles.avatarWrapper}>
              <img css={styles.avatar} src={avatar} alt="avatar" />
              <DownloadButton
                id="profile-avatar"
              />
              {errors.avatar && <div>{errors.avatar.message}</div>}
            </div>
          </div>
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button type="button" variant="outlined" onClick={onResetHandler}>
              {t('personal-info:action.cancel')}
            </Button>
            <Button type="submit">{t('personal-info:action.save')}</Button>
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
                  variant="primary"
                  label={t('personal-info:label.firstName')}
                  placeholder={t('personal-info:placeholder.firstName')}
                  {...register('firstName')}
                  error={errors.firstName?.message}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="lastName-profile"
                  type="text"
                  variant="primary"
                  label={t('personal-info:label.lastName')}
                  placeholder={t('personal-info:placeholder.lastName')}
                  {...register('lastName')}
                  error={errors.lastName?.message}
                />
              </div>
            </Flex>
            <div css={styles.inputRow}>
              <Input
                id="email-profile"
                type="email"
                variant="primary"
                label={t('personal-info:label.email')}
                placeholder={t('personal-info:placeholder.email')}
                {...register('email')}
                error={errors.email?.message}
              />
            </div>
            <div css={styles.inputRow}>
              <Input
                id="phone-profile"
                type="text"
                variant="primary"
                label={t('personal-info:label.phone')}
                placeholder={t('personal-info:placeholder.phone')}
                {...register('phone')}
                error={errors.phone?.message}
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
                  variant="primary"
                  label={t('personal-info:label.country')}
                  placeholder={t('personal-info:placeholder.country')}
                  {...register('country')}
                />
              </div>

              <div css={styles.inputRow}>
                <Input
                  id="region-profile"
                  type="text"
                  variant="primary"
                  label={t('personal-info:label.region')}
                  placeholder={t('personal-info:placeholder.region')}
                  {...register('region')}
                />
              </div>
            </Flex>

            <Flex css={styles.groupInputs}>
              <div css={styles.inputRow}>
                <Input
                  id="city-profile"
                  type="text"
                  variant="primary"
                  label={t('personal-info:label.city')}
                  placeholder={t('personal-info:placeholder.city')}
                  {...register('city')}
                />
              </div>
              <div css={styles.inputRow}>
                <Input
                  id="zip-code-profile"
                  type="text"
                  variant="primary"
                  label={t('personal-info:label.zipCode')}
                  placeholder={t('personal-info:placeholder.zip')}
                  {...register('zip')}
                />
              </div>
            </Flex>

            <div css={styles.inputRow}>
              <Input
                id="novaposhta-profile"
                type="text"
                variant="primary"
                label={t('personal-info:label.novaPoshta')}
                placeholder={t('personal-info:placeholder.novaPoshtaRef')}
                {...register('novaPoshtaRef')}
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
                label={t('personal-info:label.instagram')}
                placeholder={t('personal-info:placeholder.instagram')}
                {...register('instagram')}
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="linkedin-profile"
                type="text"
                variant="primary"
                label={t('personal-info:label.linkedin')}
                placeholder={t('personal-info:placeholder.linkedin')}
                {...register('linkedin')}
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="facebook-profile"
                type="text"
                variant="primary"
                label={t('personal-info:label.facebook')}
                placeholder={t('personal-info:placeholder.facebook')}
                {...register('facebook')}
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
                variant="primary"
                label={t('personal-info:label.currentPassword')}
                placeholder={t('personal-info:placeholder.password')}
                onCut={onCutHandler}
                onCopy={onCopyHandler}
                onPaste={onPastHandler}
                {...register('password')}
                error={errors.password?.message}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="new-password-profile"
                variant="primary"
                label={t('personal-info:label.newPassword')}
                placeholder={t('personal-info:placeholder.newPassword')}
                onCut={onCutHandler}
                onCopy={onCopyHandler}
                onPaste={onPastHandler}
                {...(register('newPassword'), { onChange: onChangeHandler })}
                error={errors.newPassword?.message}
              />
            </div>
            <div css={styles.inputRow}>
              <PasswordInput
                id="repeat-password-profile"
                variant="primary"
                label={t('personal-info:label.repeatPassword')}
                placeholder={t('personal-info:placeholder.repeatPassword')}
                onCut={onCutHandler}
                onCopy={onCopyHandler}
                onPaste={onPastHandler}
                {...register('repeatPassword')}
                error={errors.repeatPassword?.message}
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};
