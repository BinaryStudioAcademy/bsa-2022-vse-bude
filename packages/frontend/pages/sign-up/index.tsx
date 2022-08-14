import { Button } from '@primitives';
import { Input, PasswordInput } from 'components/primitives/input';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { InternalLink } from 'components/primitives/link';
import type { UserSignUpDto } from '@vse-bude/shared';
import { AuthLayout } from '../../components/authLayout/component';
import {
  contentWrapper,
  formWrapper,
  form,
  inputWrapper,
  linkText,
} from '../../components/auth/layout/styles';

export default function LoginPage() {
  const { register, handleSubmit } = useForm<UserSignUpDto>({});
  const onSubmit: SubmitHandler<UserSignUpDto> = (data) => console.log(data);

  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)} css={form}>
            <div css={inputWrapper}>
              <Input
                {...register('firstName')}
                label="First Name"
                variant="primary"
                type="text"
                name="firstName"
              />
            </div>
            <div css={inputWrapper}>
              <Input
                {...register('lastName')}
                label="Last Name"
                variant="primary"
                type="text"
                name="lastName"
              />
            </div>
            <div css={inputWrapper}>
              <Input
                {...register('phone')}
                label="Phone Number"
                variant="primary"
                type="text"
                name="phone"
              />
            </div>
            <div css={inputWrapper}>
              <Input
                {...register('email')}
                label="Email"
                variant="primary"
                type="email"
                name="email"
              />
            </div>
            <div css={inputWrapper}>
              <PasswordInput
                {...register('password')}
                label="Password"
                variant="primary"
                name="password"
              />
            </div>
            <div css={inputWrapper}>
              <PasswordInput
                {...register('password')}
                label="Repeat password"
                variant="primary"
                name="repeatPassword"
              />
            </div>
            <Button type="submit" width={'100%'}>
              Create Account
            </Button>
          </form>
        </div>
        <div css={linkText}>
          I have an account!{' '}
          <InternalLink variant="primary" label="Sign In" href={'/login'} />
        </div>
      </div>
    </AuthLayout>
  );
}
