import { Button } from '@primitives';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { UserSignUpDto } from '@vse-bude/shared';
import { useTranslation } from 'next-i18next';
import { joiResolver } from '@hookform/resolvers/joi';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Input, PasswordInput } from '../../primitives/input';
import { form, headline, inputWrapper } from '../layout/styles';
// import { getErrorKey } from '../../../helpers/validation';
import { signUpUser } from '../../../store/auth';
import { Loader } from '../../primitives/loader';
import { signUpSchema } from './validation';

export const SignUpForm = () => {
  // const { t: lang } = useTranslation('validation');
  const { t: commonLang } = useTranslation('sign-up');

  const dispatch = useAppDispatch();
  const isLoading = useTypedSelector((state) => state.auth.loading);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<UserSignUpDto>({
    resolver: joiResolver(signUpSchema),
  });
  const onSubmit: SubmitHandler<UserSignUpDto> = (data) => {
    dispatch(signUpUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={form}>
      <div css={inputWrapper}>
        <p css={headline}>{commonLang('createAccount')}</p>

        <Input
          {...register('firstName')}
          label={commonLang('firstName')}
          variant="primary"
          type="text"
          name="firstName"
          disabled={isLoading}
          // error={lang(getErrorKey('firstName', errors.firstName?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('lastName')}
          label={commonLang('lastName')}
          variant="primary"
          type="text"
          name="lastName"
          disabled={isLoading}
          // error={lang(getErrorKey('lastName', errors.lastName?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('phone')}
          label={commonLang('phone')}
          variant="primary"
          type="text"
          name="phone"
          disabled={isLoading}
          // error={lang(getErrorKey('phone', errors.phone?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('email')}
          label={commonLang('email')}
          variant="primary"
          type="email"
          name="email"
          disabled={isLoading}
          // error={lang(getErrorKey('email', errors.email?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('password')}
          label={commonLang('password')}
          variant="primary"
          name="password"
          disabled={isLoading}
          // error={lang(getErrorKey('password', errors.password?.type))}
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('repeatPassword')}
          label={commonLang('passwordRepeat')}
          variant="primary"
          name="repeatPassword"
          disabled={isLoading}
          // error={lang(
          //   getErrorKey('repeatPassword', errors.repeatPassword?.type),
          // )}
        />
      </div>
      <Button type="submit" width={'100%'} disabled={isLoading}>
        {isLoading && <Loader size={'extraSmall'} />}
        {commonLang('signUpBtn')}
      </Button>
    </form>
  );
};
