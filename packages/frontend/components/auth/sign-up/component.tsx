import { Button, Loader, Input, PasswordInput } from '@primitives';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { UserSignUpDto } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { joiResolver } from '@hookform/resolvers/joi';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { signUpSchema } from 'validation-schemas/user/sign-up';
import { useEffect } from 'react';
import { form, headline, inputWrapper } from '../layout/styles';
import { clearAuthError, signUpUser } from '../../../store/auth';

export const SignUpForm = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoading = useTypedSelector((state) => state.auth.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignUpDto>({
    mode: 'onChange',
    resolver: joiResolver(signUpSchema(t)),
  });

  const onSubmit: SubmitHandler<UserSignUpDto> = (data) => {
    dispatch(signUpUser(data));
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

  useEffect(
    () => () => {
      dispatch(clearAuthError());
    },
    [dispatch],
  );

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} css={form}>
      <div css={inputWrapper}>
        <p css={headline}>{t('auth:sign-up.createAccount')}</p>

        <Input
          {...register('firstName')}
          label={t('auth:sign-up.firstName')}
          placeholder={t('auth:sign-up.firstNamePlaceholder')}
          variant="primary"
          type="text"
          name="firstName"
          disabled={isLoading}
          error={errors.firstName?.message}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('lastName')}
          label={t('auth:sign-up.lastName')}
          placeholder={t('auth:sign-up.lastNamePlaceholder')}
          variant="primary"
          type="text"
          name="lastName"
          disabled={isLoading}
          error={errors.lastName?.message}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('email')}
          label={t('auth:sign-up.email')}
          placeholder={t('auth:sign-up.emailPlaceholder')}
          variant="primary"
          type="email"
          name="email"
          disabled={isLoading}
          error={errors.email?.message}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('phone')}
          label={t('auth:sign-up.phone')}
          placeholder={t('auth:sign-up.phonePlaceholder')}
          variant="primary"
          type="text"
          name="phone"
          disabled={isLoading}
          error={errors.phone?.message}
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('password')}
          label={t('auth:sign-up.password')}
          placeholder={t('auth:sign-up.passwordPlaceholder')}
          variant="primary"
          name="password"
          disabled={isLoading}
          onCut={onCutHandler}
          onCopy={onCopyHandler}
          onPaste={onPastHandler}
          error={errors.password?.message}
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('repeatPassword')}
          label={t('auth:sign-up.passwordRepeat')}
          placeholder={t('auth:sign-up.passwordRepeatPlaceholder')}
          variant="primary"
          name="repeatPassword"
          disabled={isLoading}
          onCut={onCutHandler}
          onCopy={onCopyHandler}
          onPaste={onPastHandler}
          error={errors.repeatPassword?.message}
        />
      </div>
      <Button type="submit" width={'100%'} disabled={isLoading}>
        {isLoading && <Loader size={'extraSmall'} />}
        {t('auth:sign-up.signUpBtn')}
      </Button>
    </form>
  );
};
