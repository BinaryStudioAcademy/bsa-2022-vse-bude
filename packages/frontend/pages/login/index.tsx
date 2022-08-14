import { Button } from '@primitives';
import { AuthLayout } from 'components/authLayout';
import { Input, PasswordInput } from 'components/primitives/input';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { InternalLink } from 'components/primitives/link';
import type { UserSignInDto } from '@vse-bude/shared';
import type { Theme } from 'theme';
import { css } from '@emotion/react';

export const contentWrapper = ({ spaces }: Theme) => css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${spaces.xl6} 0;
`;
export const formWrapper = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
export const form = () => css`
  width: 100%;
  min-width: 327px;
`;
export const linkText = ({ fontSizes, colors, lineHeights }: Theme) => css`
  text-align: center;
  font-family: inherit;
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
  color: ${colors.text};
`;
export const inputWrapper = ({ spaces }: Theme) => css`
  margin-bottom: ${spaces.md};
`;

export default function LoginPage() {
  const { register, handleSubmit } = useForm<UserSignInDto>({});
  const onSubmit: SubmitHandler<UserSignInDto> = (data) => console.log(data);

  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)} css={form}>
            <div css={inputWrapper}>
              <Input
                {...register('email')}
                label="Email"
                variant="primary"
                type="email"
              />
            </div>
            <div css={inputWrapper}>
              <PasswordInput
                {...register('password')}
                label="Password"
                variant="primary"
              />
            </div>
            <Button type="submit">Sign in</Button>
          </form>
        </div>
        <p css={linkText}>
          I haven&apos;t got an account{' '}
          <InternalLink variant="primary" label="Sign Up" href={'#'} />
        </p>
      </div>
    </AuthLayout>
  );
}
