import { phoneVerification } from 'store/auth';
import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useTypedSelector } from '@hooks';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { PhoneVerifyDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input } from '../../primitives/input';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';
import { hideMainTextPart } from '../../../helpers/text';
import { Error } from '../../primitives/error/component';
import { verifyCodeSchema } from './validation';

export const PhoneVerification = () => {
  const { user } = useTypedSelector((state) => state.profile);
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
    </form>
  );
};
