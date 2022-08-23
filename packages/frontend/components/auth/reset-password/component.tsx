import { Button, InternalLink } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { ResetPasswordLink } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input } from '@primitives';
import { Routes } from '@enums';
import { inputWrapper, linkText } from '../layout/styles';
import { verifyForm, verifyText } from '../styles';
import { getErrorKey } from '../../../helpers/validation';
import { Divider } from '../../primitives/divider';
import { verifyCodeSchema } from './validation';

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordLink>({
    resolver: joiResolver(verifyCodeSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordLink> = (data) => {
    console.log(data);
  };

  const { t } = useTranslation('auth');
  const { t: commonLang } = useTranslation('common');

  return (
    <form css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>{t('ENTER_EMAIL_ADDRESS_PASSWORD_RESET_TEXT')}</span>
        </div>
        <Input
          {...register('email')}
          label={t('EMAIL')}
          variant="primary"
          type="text"
          name="email"
          error={t(getErrorKey('email', errors.email?.type))}
        />
      </div>
      <Button type="submit" width={'100%'}>
        {commonLang('SEND_RESET_LINK_BTN')}
      </Button>
      <Divider />
      <div css={linkText}>
        {commonLang('I_HAVE_AN_ACCOUNT')}!{' '}
        <InternalLink
          variant="primary"
          label={`${commonLang('SIGN_IN')}!`}
          href={Routes.SIGN_IN}
        />
      </div>
    </form>
  );
};
