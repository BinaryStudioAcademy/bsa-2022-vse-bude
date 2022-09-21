import { Button, InternalLink, PasswordInput } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { UpdatePassword } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Routes } from '@enums';
import { useAppDispatch } from '@hooks';
import { useRouter } from 'next/router';
import { inputWrapper, linkText } from '../layout/styles';
import { verifyForm } from '../styles';
import { Divider } from '../../primitives/divider';
import { updatePassword } from '../../../store/auth';
import { verifyCodeSchema } from './validation';

export const ResetPassword = () => {
  const { register, handleSubmit } = useForm<UpdatePassword>({
    resolver: joiResolver(verifyCodeSchema),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<UpdatePassword> = (data) => {
    const updateData: UpdatePassword = {
      ...data,
      email: `${router.query.email}`,
      updateHash: `${router.query.value}`,
    };
    dispatch(updatePassword(updateData));
  };

  const { t } = useTranslation('auth');

  return (
    <form noValidate css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('password')}
          label={t('reset-password.password')}
          placeholder={t('reset-password.passwordPlaceholder')}
          variant="primary"
          name="password"
          // error={lang(getErrorKey('password', errors.password?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('repeatPassword')}
          label={t('sign-up.passwordRepeat')}
          placeholder={t('sign-up.passwordRepeatPlaceholder')}
          variant="primary"
          name="repeatPassword"
          // error={lang(getErrorKey('password', errors.password?.type))}
        />
      </div>
      <Button type="submit" width={'100%'}>
        {t('resendBtn.updatePassword')}
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
