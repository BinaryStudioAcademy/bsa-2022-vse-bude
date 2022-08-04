import React, { FC } from 'react';
import { Button, Text, View } from '~/components/components';

type Props = {
  onSubmit: () => void;
};

const SignInForm: FC<Props> = () => {
  return (
    <>
      <Text>Sign In</Text>
      <View>
        <Button
          label="Sign in"
          onPress={() => {
            // TODO: handle press
          }}
        />
      </View>
    </>
  );
};

export { SignInForm };
