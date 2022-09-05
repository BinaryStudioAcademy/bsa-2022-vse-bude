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
import { joiResolver } from '@hookform/resolvers/joi';
import { profileMapper, updateDtoMapper } from '@helpers';
import { updateUserProfile, setIsEditing } from '@store';
import { useEffect, useState } from 'react';
import type { RootState } from '@types';
import { showVerifyModal } from 'store/verify/actions';
import { SectionHeader, NestedLayout } from '../common';
import * as styles from './styles';
import { onChangeNewPassword } from './utils';

const EditPersonalInfo = ({ user }: { user: FullUserProfileDto }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const saveLoader = useTypedSelector(
    (state: RootState) => state.profile.saveLoader,
  );

  const {
    register,
    reset,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //mode: 'onChange',
    defaultValues: profileMapper({ user }),
    resolver: joiResolver(userUpdateSchema(t)),
  });

  useEffect(() => {
    reset({ 'password': '', 'repeatPassword': '', 'newPassword': '' });
  }, [isSubmit, reset]);

  const onSave: SubmitHandler<SaveUserProfileDto> = (data, event) => {
    event.preventDefault();
    const currentLinks = user.socialMedia;
    setIsSubmit(!isSubmit);
    dispatch(
      updateUserProfile({ data: updateDtoMapper({ data, currentLinks }) }),
    );
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    clearErrors('newPassword');
    onChangeNewPassword({ value, t, setError, setValue });
  };
  const onResetHandler = () => {
    reset(profileMapper({ user }), {
      keepDefaultValues: true,
    });
    dispatch(setIsEditing());
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
    dispatch(showVerifyModal());
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
              {!user.phoneVerified && (
                <Button
                  type="button"
                  size="big"
                  variant="outlined"
                  onClick={onVerifyPhone}
                >
                  {t('personal-info:action.verify')}
                </Button>
              )}
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
                label={t('personal-info:label.deliveryData')}
                placeholder={t('personal-info:placeholder.deliveryData')}
                {...register('deliveryData')}
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
