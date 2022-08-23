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
import { useTypedSelector } from '@hooks';
import type { RootState } from '@types';
import { useEffect } from 'react';
import flag from '../../../../public/images/flagBg.png';
import noavatar from '../../../../public/images/noavatar.svg';
import { SectionHeader, NestedLayout } from '../../common';
import * as styles from './styles';

export const PersonalInfo = () => {
  const { user, address, socialMedia } = useTypedSelector(
    (state: RootState) => state.profile,
  );
  const { avatar, firstName, lastName, email, phone } = user;
  const addressFields = address
    ? address
    : {
        country: address?.country ? address.country : '',
        region: address?.region ? address.region : '',
        city: address?.city ? address.city : '',
        zip: address?.zip ? address.zip : '',
        novaPoshtaRef: address?.novaPoshtaRef ? address.novaPoshtaRef : '',
      };
  const socialMediaFields = socialMedia
    ? socialMedia
    : {
        instagram: socialMedia?.instagram ? socialMedia.instagram : '',
        linkedin: socialMedia?.linkedin ? socialMedia.linkedin : '',
        facebook: socialMedia?.facebook ? socialMedia.facebook : '',
      };

  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    //formState: { errors },
  } = useForm<UserPersonalInfoDto>({
    defaultValues: {
      avatar,
      firstName,
      lastName,
      email,
      phone,
      ...addressFields,
      ...socialMediaFields,
      password: '',
      newPassword: '',
      repeatPassword: '',
    },
    resolver: joiResolver(userUpdateSchema),
  });

  const { t } = useTranslation();

  const [photo] = watch(['avatar']);

  useEffect(() => {
    if (!photo) {
      setValue('avatar', noavatar.src);
    }
  }, [watch, photo, setValue]);

  const onSave: SubmitHandler<UserPersonalInfoDto> = (data, event) => {
    event.preventDefault();
    console.log('data', data);
  };

  const onDownloadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    setValue('avatar', url);
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
                {...register('avatar')}
                id="profile-avatar"
                onChange={onDownloadAvatar}
              />
            </div>
          </div>
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                reset(
                  {
                    avatar,
                    firstName,
                    lastName,
                    email,
                    phone,
                    ...addressFields,
                    ...socialMediaFields,
                    password: '',
                    newPassword: '',
                    repeatPassword: '',
                  },
                  {
                    keepDefaultValues: true,
                  },
                );
              }}
            >
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
                  //error={t(errors.firstName?.message)}
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
                  //error={t(errors.lastName?.message)}
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
                //error={t(errors.email?.message)}
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
                //error={t(errors.phone?.message)}
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
                //error={t(errors.password?.message)}
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
                {...register('newPassword')}
                //error={t(errors.newPassword?.message)}
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
                //error={t(errors.repeatPassword?.message)}
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};
