import { useAppDispatch, useTypedSelector } from '@hooks';
import { Button, Error, Input } from '@primitives';
import { useTranslation } from 'next-i18next';
import type { EmailVerifyDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { emailCodeResend, emailVerification } from 'store/auth';
import { RESEND_VERIFICATION_CODE_LIMIT_SEC } from 'common/constants/app';
import { getErrorKey } from 'helpers/validation';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';
import { verifyCodeSchema } from './validation';
import { ResendCodeButton } from './resend-code';
import { divider } from './styles';

export const EmailVerification = () => {
  const { error, user } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerifyDto>({
    resolver: joiResolver(verifyCodeSchema),
  });
  const onSubmit: SubmitHandler<EmailVerifyDto> = (data) => {
    dispatch(emailVerification(data));
  };

  const onResendCode = () => {
    dispatch(emailCodeResend());
  };

  const { t } = useTranslation();

  return (
    <form css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('auth:emailText')}
            {user && <span css={verifyEntity}> {user.email}</span>}!
          </span>
          <span>{t('auth:enterCode')}!</span>
        </div>
        <Input
          {...register('code')}
          css={verifyInput}
          label={t('auth:code')}
          variant="primary"
          type="text"
          name="code"
          error={t(getErrorKey('code', errors.code?.type) as any)}
        />
        <Error text={error} />
      </div>
      <Button type="submit" width={'100%'}>
        {t('auth:text')}
      </Button>
      <hr css={divider} />
      <div>
        <ResendCodeButton
          onClickResend={onResendCode}
          timeLimit={RESEND_VERIFICATION_CODE_LIMIT_SEC}
        />
      </div>
    </form>
  );
};
