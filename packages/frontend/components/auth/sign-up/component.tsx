import { Button } from '@primitives';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { UserSignUpDto } from '@vse-bude/shared';
import { Input, PasswordInput } from '../../primitives/input';
import { form, inputWrapper } from '../layout/styles';
import { nameValidation, passwordValidation } from './validation';

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<UserSignUpDto>({});
  const onSubmit: SubmitHandler<UserSignUpDto> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={form}>
      <div css={inputWrapper}>
        <Input
          {...register('firstName', nameValidation)}
          label="First Name"
          variant="primary"
          type="text"
          name="firstName"
        />
      </div>
      <div css={inputWrapper}>
        <Input
          {...register('lastName', nameValidation)}
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
          {...register('password', passwordValidation)}
          label="Password"
          variant="primary"
          name="password"
        />
      </div>
      <div css={inputWrapper}>
        <PasswordInput
          {...register('password', passwordValidation)}
          label="Repeat password"
          variant="primary"
          name="repeatPassword"
        />
      </div>
      <Button type="submit" width={'100%'}>
        Create Account
      </Button>
    </form>
  );
};
