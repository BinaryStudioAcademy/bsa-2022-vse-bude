import { Button } from '@primitives';
import { Input, PasswordInput } from 'components/primitives/input';
import { Container, Flex } from 'grapefruit-ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const { register, handleSubmit } = useForm<IFormInput>({});
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  interface IFormInput {
    email: string;
    password: string;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Container>
        <Flex justify={'center'} direction="column">
          <Input
            {...register('email')}
            label="Email"
            variant="primary"
            type="email"
          />
          <PasswordInput
            {...register('password')}
            label="Password"
            variant="primary"
          />
          <Button type="submit">Sign in</Button>
        </Flex>
      </Container>
    </form>
  );
}
