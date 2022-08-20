import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input, PasswordInput, InternalLink, Button } from '@primitives';
import type { UserSignInDto } from '@vse-bude/shared';
import { Routes } from '@enums';
import { getAuthErrorSelector, loginUser } from 'store/auth';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { signInSchema } from 'validation-schemas/user';
import * as styles from './styles';

export default function Login() {
  const { t } = useTranslation('auth');

  const dispatch = useAppDispatch();
  const authError = useTypedSelector(getAuthErrorSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignInDto>({
    resolver: joiResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<UserSignInDto> = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div css={styles.contentWrapper}>
      <div css={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
          <p css={styles.headline}>{t('loginHeadline')}</p>
          <div css={styles.inputWrapper}>
            <Input
              {...register('email')}
              label={t('email')}
              placeholder={t('emailPlaceholder')}
              variant="primary"
              type="email"
              error={errors.email?.message}
            />
          </div>
          <div css={styles.inputWrapper}>
            <PasswordInput
              {...register('password')}
              label={t('password')}
              placeholder={t('passwordPlaceholder')}
              variant="primary"
              error={errors.password?.message}
            />
          </div>
          {/* TODO: add styles to error */}
          {authError && <p>{authError}</p>}
          <div css={styles.inputWrapper}>
            <Button type="submit">{t('loginBtn')}</Button>
          </div>
        </form>
      </div>
      <p css={styles.linkText}>
        {t('signUpLinkText')}
        <span>
          <InternalLink
            variant="primary"
            label="Sign Up"
            href={Routes.SIGN_UP}
          />
        </span>
      </p>
    </div>
  );
}
