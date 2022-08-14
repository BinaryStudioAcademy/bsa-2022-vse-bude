import { Button } from '@primitives';
import { Input, PasswordInput } from 'components/primitives/input';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { InternalLink } from 'components/primitives/link';
import type { UserSignInDto } from '@vse-bude/shared';
import * as styles from './styles';

export default function Login() {
  const { register, handleSubmit } = useForm<UserSignInDto>({});
  const onSubmit: SubmitHandler<UserSignInDto> = (data) => console.log(data);

  return (
    <div css={styles.contentWrapper}>
      <div css={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
          <p css={styles.headline}>Login account</p>
          <div css={styles.inputWrapper}>
            <Input
              {...register('email')}
              label="Email"
              variant="primary"
              type="email"
            />
          </div>
          <div css={styles.inputWrapper}>
            <PasswordInput
              {...register('password')}
              label="Password"
              variant="primary"
            />
          </div>
          <div css={styles.inputWrapper}>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
      <p css={styles.linkText}>
        I haven&apos;t got an account{' '}
        <InternalLink variant="primary" label="Sign Up" href={'#'} />
      </p>
    </div>
  );
}
