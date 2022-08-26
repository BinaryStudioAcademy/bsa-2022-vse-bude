import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useAuth, useTypedSelector } from '@hooks';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { PhoneVerifyDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input, Error } from '@primitives';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';
import { hideMainTextPart } from '../../../helpers/text';
import { phoneCodeResend, phoneVerification } from '../../../store/auth';
import { RESEND_VERIFICATION_CODE_LIMIT_SEC } from '../../../common/constants/app';
import { verifyCodeSchema } from './validation';
import { divider } from './styles';
import { ResendCodeButton } from './resend-code';

export const PhoneVerification = () => {
  const { user } = useAuth();
  const { error } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<PhoneVerifyDto>({
    resolver: joiResolver(verifyCodeSchema),
  });

  const onSubmit: SubmitHandler<PhoneVerifyDto> = (data) => {
    dispatch(phoneVerification(data));
  };

  const { t } = useTranslation();
  const onResendCode = () => {
    dispatch(phoneCodeResend());
  };

  return (
    <form css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('auth:phoneText')}
            {user && (
              <span css={verifyEntity}> {hideMainTextPart(user.phone)}</span>
            )}
            !
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
          // error={t(getErrorKey('code', errors.code?.type))}
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
