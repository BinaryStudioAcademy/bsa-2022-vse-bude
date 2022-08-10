import React from 'react';
import { UserSignUpDto } from '@vse-bude/shared';

import { useAppForm } from '~/hooks/hooks';
import { Text, View, Button, Input, KeyboardAvoiding } from '~/components/components';
import { signUp } from '~/validation-schemas/validation-schemas';
import { DEFAULT_SIGN_UP_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignUpDto) => void;
};

const SignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignUpDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: signUp,
  });

  return (
    <KeyboardAvoiding style={{ flex: 1, justifyContent: 'center' }}>
      <>
        <Text>Sign Up</Text>
        <View>
          <Input
            label="Email"
            placeholder="Enter your email"
            name="email"
            control={control}
            errors={errors}
          />
          <Input
            label="Name"
            placeholder="Enter your name"
            name="name"
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
          <Button label="Sign up" onPress={handleSubmit(onSubmit)} />
        </View>
      </>
    </KeyboardAvoiding >
  );
};

export { SignUpForm };
