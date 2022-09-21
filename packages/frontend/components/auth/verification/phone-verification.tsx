import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import {
  useAppDispatch,
  // useAuth,
  useTypedSelector,
} from '@hooks';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { PhoneVerifyDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input, Error } from '@primitives';
import { inputWrapper } from '../layout/styles';
import { verifyForm, verifyInput } from '../styles';
import { phoneCodeResend, phoneVerification } from '../../../store/auth';
import { RESEND_VERIFICATION_CODE_LIMIT_SEC } from '../../../common/constants/app';
import { createVerifyCodeSchema } from './validation';
import { ResendCodeButton } from './resend-code';
import { resendButton } from './styles';

export const PhoneVerification = () => {
  // const { user } = useAuth();
  const { error } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneVerifyDto>({
    resolver: joiResolver(createVerifyCodeSchema(t)),
  });

  const onSubmit: SubmitHandler<PhoneVerifyDto> = (data) => {
    dispatch(phoneVerification(data));
  };

  const onResendCode = () => {
    dispatch(phoneCodeResend());
  };

  return (
    <form noValidate css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <Input
          {...register('code')}
          css={verifyInput}
          label={t('common:verify.enterCode.input')}
          variant="primary"
          type="text"
          name="code"
          error={errors.code?.message}
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
