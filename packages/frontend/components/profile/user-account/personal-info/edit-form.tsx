import { useTranslation } from 'next-i18next';
import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Input, PasswordInput, Column, Flex, Button } from '@primitives';
import { userUpdateSchema } from 'validation-schemas/user/user-update';
import type { SaveUserProfileDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { UserPersonalInfoValidationMessage } from '@vse-bude/shared';
import { SectionHeader, NestedLayout } from '../../../sub-pages/common';
import * as styles from './styles';

const EditPersonalInfo = () => {
  const { t } = useTranslation();

  const {
    register,
    reset,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<SaveUserProfileDto>({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@yahoo.com',
      phone: '+380999999999',
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

  const onSave: SubmitHandler<SaveUserProfileDto> = (data, event) => {
    event.preventDefault();
    console.log('data', data);
  };
  console.log(errors);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    clearErrors('newPassword');
    if (value.includes(' ')) {
      setError('newPassword', {
        message: t(UserPersonalInfoValidationMessage.SPACES_IN_PASSWORD),
      });
    } else if (/^[А-ЯЁIЇҐЄЂЃЀЅЍЈЉЊЋЌЎа-яёіїґєђѓѐѕѝјљњћќў]+$/.test(value)) {
      setError('newPassword', {
        message: t(UserPersonalInfoValidationMessage.CYRILLIC),
      });
    } else {
      setValue('newPassword', event.target.value);
    }
  };

  const onResetHandler = () => {
    reset(
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@yahoo.com',
        phone: '+380999999999',
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
        <div css={styles.actionWrapper}>
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button
              size="flexible"
              type="button"
              variant="outlined"
              onClick={onResetHandler}
            >
              {t('personal-info:action.cancel')}
            </Button>
            <Button size="flexible" type="submit">
              {t('personal-info:action.save')}
            </Button>
          </Flex>
        </div>

        <div css={styles.sections}>
          <Column css={styles.sectionRow}>
            <SectionHeader>
              {t('personal-info:headline.personalInfo')}
            </SectionHeader>
            <Flex css={styles.groupeInputs}>
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
            <Flex css={styles.groupePhone}>
              <div css={styles.phoneRow}>
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
              <Button type="button" size="big" variant="outlined">
                {t('personal-info:action.verify')}
              </Button>
            </Flex>
          </Column>

          <Column css={styles.sectionRow}>
            <SectionHeader>{t('personal-info:headline.address')}</SectionHeader>

            <Flex css={styles.groupeInputs}>
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

            <Flex css={styles.groupeInputs}>
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
                error={errors.instagram?.message}
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
                error={errors.linkedin?.message}
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
                error={errors.facebook?.message}
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

export default EditPersonalInfo;
