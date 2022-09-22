import { Button, InternalLink } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { ResetPasswordLink } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input } from '@primitives';
import { Routes } from '@enums';
import { useAppDispatch } from '@hooks';
import { inputWrapper, linkText } from '../layout/styles';
import { verifyForm, verifyText } from '../styles';
import { Divider } from '../../primitives/divider';
import { sendPasswordResetLink } from '../../../store/auth';
import { verifyCodeSchema } from './validation';

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm<ResetPasswordLink>({
    resolver: joiResolver(verifyCodeSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ResetPasswordLink> = (data) => {
    dispatch(sendPasswordResetLink(data));
  };

  const { t } = useTranslation('auth');

  return (
    <form noValidate css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>{t('forgot-password.emailAddressPasswordResetText')}</span>
        </div>
        <Input
          {...register('email')}
          label={t('sign-in.email')}
          variant="primary"
          type="text"
          name="email"
          // error={t(errors.email?.type)}
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('resendBtn.text')}
      </Button>
      <Divider />
      <div css={linkText}>
        {t('sign-up.accountExist')}!{' '}
        <InternalLink
          variant="primary"
          label={`${t('sign-up.signIn')}!`}
          href={Routes.SIGN_IN}
        />
      </div>
    </form>
  );
};
