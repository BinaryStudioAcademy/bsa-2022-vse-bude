import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { ResetPasswordLink } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input } from '@primitives';
import { inputWrapper } from '../layout/styles';
import { verifyForm, verifyText } from '../styles';
import { getErrorKey } from '../../../helpers/validation';
import { verifyCodeSchema } from './validation';

export const ResetPassword = () => {
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

  return (
    <form css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            Введіть E-mail аккаунта, пароль до якого ви хочете скинути!
            {t('ENTER_EMAIL_ADDRESS_PASSWORD_RESET_TEXT')}
          </span>
          <span>{t('ENTER_ACCOUNT_EMAIL_ADDRESS')}!</span>
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
        {t('SEND_RESET_LINK_BTN')}
      </Button>
    </form>
  );
};
