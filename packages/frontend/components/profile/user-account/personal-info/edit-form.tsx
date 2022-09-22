import { useTranslation } from 'next-i18next';
import { useAppDispatch, useTypedSelector } from '@hooks';
import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  Input,
  PasswordInput,
  Column,
  Flex,
  Button,
  Loader,
} from '@primitives';
import { userUpdateSchema } from 'validation-schemas/user/user-update';
import type { SaveUserProfileDto, FullUserProfileDto } from '@vse-bude/shared';
import { DefaultInpValue } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { profileMapper, updateDtoMapper } from '@helpers';
import { updateUserProfile, setIsEditing } from '@store';
import { useEffect, useState } from 'react';
import type { RootState } from '@types';
import {
  showVerifyEmailModal,
  showVerifyPhoneModal,
} from 'store/modals/actions';
import { SectionHeader, NestedLayout } from '../common';
import * as styles from './styles';

const EditPersonalInfo = ({ user }: { user: FullUserProfileDto }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [updatedPhone, setUpdatedPhone] = useState(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const saveLoader = useTypedSelector(
    (state: RootState) => state.profile.saveLoader,
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: profileMapper({ user }),
    resolver: joiResolver(userUpdateSchema(t)),
  });

  useEffect(() => {
    const resetPhone = !user.phone ? null : user.phone;
    setUpdatedPhone(resetPhone);
    reset({
      'phone': !user.phone ? '' : user.phone,
      'email': !user.email ? '' : user.email,
      'country': !user.userAddress?.country
        ? t('personal-info:defaultCountry')
        : user.userAddress?.country,
      'password': '',
      'repeatPassword': '',
      'newPassword': '',
    });
  }, [isSubmit, reset, user.phone, user.email, user.userAddress?.country, t]);

  const onResetHandler = () => {
    dispatch(setIsEditing());
  };

  const onSave: SubmitHandler<SaveUserProfileDto> = async (data, event) => {
    event.preventDefault();
    const currentLinks = user.socialMedia;
    setIsSubmit(!isSubmit);
    dispatch(
      updateUserProfile({ data: updateDtoMapper({ data, currentLinks }) }),
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

  const onVerifyPhone = () => {
    dispatch(showVerifyPhoneModal());
  };

  const onVerifyEmail = () => {
    dispatch(showVerifyEmailModal());
  };

  return (
    <NestedLayout>
      <form
        css={styles.form}
        onSubmit={handleSubmit(onSave)}
        autoComplete="new-password"
        noValidate
      >
        <div css={styles.actionWrapper}>
          <Flex justify={'flex-end'} css={styles.buttons}>
            <Button
              size="flexible"
              type="button"
              variant="outlined"
              disabled={saveLoader}
              onClick={onResetHandler}
            >
              {t('personal-info:action.cancel')}
            </Button>
            <Button size="flexible" type="submit" disabled={saveLoader}>
              {saveLoader ? (
                <Loader size={'extraSmall'} />
              ) : (
                t('personal-info:action.save')
              )}
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

            <Flex css={styles.groupEmail}>
              <div css={styles.phoneRow}>
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
              {!user.emailVerified && (
                <div css={styles.verifyEmailButtonWrapper}>
                  <Button
                    type="button"
                    size="big"
                    variant="outlined"
                    onClick={onVerifyEmail}
                    disabled={dirtyFields.email}
                    tooltip={
                      dirtyFields.email && t('personal-info:tooltip.verify')
                    }
                  >
                    {t('personal-info:action.verify')}
                  </Button>
                </div>
              )}
            </Flex>

            <Flex css={styles.groupPhone}>
              <div css={styles.phoneRow}>
                <Input
                  id="phone-profile"
                  inerasableValue={!updatedPhone ? DefaultInpValue.PHONE : null}
                  type="text"
                  variant="primary"
                  label={t('personal-info:label.phone')}
                  placeholder={t('personal-info:placeholder.phone')}
                  {...register('phone')}
                  error={errors.phone?.message}
                />
              </div>
              {!user.phoneVerified && (
                <div css={styles.verifyButtonWrapper}>
                  <Button
                    type="button"
                    size="big"
                    variant="outlined"
                    onClick={onVerifyPhone}
                    disabled={dirtyFields.phone || !user.phone}
                    tooltip={
                      dirtyFields.phone || !user.phone
                        ? t('personal-info:tooltip.verify')
                        : ''
                    }
                  >
                    {t('personal-info:action.verify')}
                  </Button>
                </div>
              )}
            </Flex>
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
                  error={errors.country?.message}
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
                  error={errors.region?.message}
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
                  error={errors.city?.message}
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
                  error={errors.zip?.message}
                />
              </div>
            </Flex>

            <div css={styles.inputRow}>
              <Input
                id="novaposhta-profile"
                type="text"
                variant="primary"
                label={t('personal-info:label.deliveryData')}
                placeholder={t('personal-info:placeholder.deliveryData')}
                {...register('deliveryData')}
                error={errors.deliveryData?.message}
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
                label={t('personal-info:label.instagram')}
                placeholder={t('personal-info:placeholder.instagram')}
                {...register('instagram')}
                error={errors.instagram?.message}
                autoComplete="off"
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="facebook-profile"
                type="text"
                name="facebook"
                variant="primary"
                label={t('personal-info:label.facebook')}
                placeholder={t('personal-info:placeholder.facebook')}
                {...register('facebook')}
                error={errors.facebook?.message}
                autoComplete="off"
              />
            </div>

            <div css={styles.inputRow}>
              <Input
                id="linkedin-profile"
                type="text"
                name="linkedin"
                variant="primary"
                label={t('personal-info:label.linkedin')}
                placeholder={t('personal-info:placeholder.linkedin')}
                {...register('linkedin')}
                error={errors.linkedin?.message}
                autoComplete="off"
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
                autoComplete="off"
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
                error={errors.newPassword?.message}
                autoComplete="new-password"
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
                autoComplete="new-password"
              />
            </div>
          </Column>
        </div>
      </form>
    </NestedLayout>
  );
};

export default EditPersonalInfo;
