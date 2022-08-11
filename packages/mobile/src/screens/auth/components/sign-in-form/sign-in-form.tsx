import React, { FC } from 'react';
import { Button, Text, View, Input } from '~/components/components';
import { UserSignInDto } from '@vse-bude/shared';
import { useAppForm } from '~/hooks/hooks';
import { signIn } from '~/validation-schemas/validation-schemas';
import { DEFAULT_SIGN_IN_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignInDto) => void;
};

const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: signIn,
  });

  return (
    <View>
      <Text>Sign In</Text>
      <View>
        <Input
          label="Email"
          placeholder="Enter your email"
          name="email"
          control={control}
          errors={errors}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          name="password"
          control={control}
          errors={errors}
        />
        <Button label="Sign in" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export { SignInForm };
