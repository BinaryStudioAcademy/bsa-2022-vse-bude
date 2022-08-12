import React from 'react';
import { UserSignUpDto } from '@vse-bude/shared';

import { useAppForm } from '~/hooks/hooks';
import { View, Button, Input } from '~/components/components';
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
    <View>
      <Input
        label="Email"
        placeholder="Enter your email"
        name="email"
        control={control}
        errors={errors}
      />
      <Input
        label="First name"
        placeholder="Enter your first name"
        name="firstName"
        control={control}
        errors={errors}
      />
      <Input
        label="Last name"
        placeholder="Enter your last name"
        name="lastName"
        control={control}
        errors={errors}
      />
      <Input
        label="Phone Number"
        placeholder="Enter your phone"
        name="phone"
        control={control}
        errors={errors}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        name="password"
        control={control}
        errors={errors}
      />
      <Input
        label="Repeat Password"
        placeholder="Enter password"
        name="password"
        control={control}
        errors={errors}
      />
      <View style={{ marginVertical: 15 }}>
        <Button label="Create Account" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export { SignUpForm };
