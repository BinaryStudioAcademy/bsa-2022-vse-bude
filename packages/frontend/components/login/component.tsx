import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {
  Input,
  PasswordInput,
  InternalLink,
  Button,
  Loader,
} from '@primitives';
import type { UserSignInDto } from '@vse-bude/shared';
import { Routes } from '@enums';
import { getAuthErrorSelector, loginUser } from 'store/auth';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { signInSchema } from 'validation-schemas/user';
import { Divider } from '../primitives/divider';
import * as styles from './styles';

export default function Login() {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const authError = useTypedSelector(getAuthErrorSelector);
  const isLoading = useTypedSelector((state) => state.auth.loading);

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
        <form noValidate onSubmit={handleSubmit(onSubmit)} css={styles.form}>
          <p css={styles.headline}>{t('auth:sign-in.loginHeadline')}</p>
          <div css={styles.inputWrapper}>
            <Input
              {...register('email')}
              label={t('auth:sign-in.email')}
              placeholder={t('auth:sign-in.emailPlaceholder')}
              variant="primary"
              type="email"
              error={errors.email?.message}
            />
          </div>
          <div css={styles.inputWrapper}>
            <PasswordInput
              {...register('password')}
              label={t('auth:sign-in.password')}
              placeholder={t('auth:sign-in.passwordPlaceholder')}
              variant="primary"
              error={errors.password?.message}
            />
          </div>
          {/* TODO: add styles to error */}
          {authError && <p css={styles.error}>{authError}</p>}
          <div css={styles.inputWrapper}>
            <Button type="submit" width={'100%'} disabled={isLoading}>
              {isLoading && <Loader size={'extraSmall'} />}
              {t('auth:sign-in.loginBtn')}
            </Button>
          </div>
          <Divider />
          <div>
            <p css={styles.linkText}>
              {t('auth:sign-in.forgotPassword')}?
              <span>
                <InternalLink
                  variant="primary"
                  label={t('auth:sign-in.restorePassword')}
                  href={Routes.FORGOT_PASSWORD}
                />
              </span>
            </p>
          </div>
        </form>
      </div>
      <p css={styles.linkText}>
        {t('auth:sign-in.signUpLinkText')}
        <span>
          <InternalLink
            variant="primary"
            label={t('auth:sign-in.signUp')}
            href={Routes.SIGN_UP}
          />
        </span>
      </p>
    </div>
  );
}
