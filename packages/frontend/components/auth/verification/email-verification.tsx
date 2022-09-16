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
import { resendButton } from './styles';

interface Props {
  showDescription?: boolean;
}

export const EmailVerification = ({ showDescription }: Props) => {
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
        {showDescription && (
          <div css={verifyText}>
            <span>
              {t('auth:emailText')}
              {user && <span css={verifyEntity}> {user.email}</span>}!
            </span>
            <span>{t('auth:enterCode')}!</span>
          </div>
        )}
        <Input
          {...register('code')}
          css={verifyInput}
          label={t('common:verify.enterCode.input')}
          variant="primary"
          type="text"
          name="code"
          error={t(getErrorKey('code', errors.code?.type) as any)}
        />
        <Error text={error} />
      </div>
      <Button type="submit" width={'100%'}>
        {t('common:verify.enterCode.button.continue')}
      </Button>
      <div css={resendButton}>
        <ResendCodeButton
          onClickResend={onResendCode}
          timeLimit={RESEND_VERIFICATION_CODE_LIMIT_SEC}
        />
      </div>
    </form>
  );
};
