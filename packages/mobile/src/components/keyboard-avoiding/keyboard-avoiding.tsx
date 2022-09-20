import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { IS_IOS } from '~/common/constants/constants';
import { styles } from './styles';

type KeyboardAvoidingProps = {
  children: ReactNode;
  style?: Record<string, unknown>;
};

const KeyboardAvoiding: FC<KeyboardAvoidingProps> = ({ children, style }) => {
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
