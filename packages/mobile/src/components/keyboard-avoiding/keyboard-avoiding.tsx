import React, { FC, ReactElement } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { IS_IOS } from '~/common/constants/constants';
import { styles } from './styles';

type KeyboardAvoidingProps = {
  children: ReactElement | null;
  style?: Record<string, unknown>;
};

const KeyboardAvoiding: FC<KeyboardAvoidingProps> = ({
  children,
  style,
}): ReactElement => {
  return (
    <KeyboardAvoidingView
      style={[styles.wrapper, style]}
      behavior={IS_IOS ? 'padding' : undefined}
    >
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export { KeyboardAvoiding };
