import React, { FC, ReactElement } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { isIOS } from '~/common/constants/constants';
import { styles } from './styles';

type KeyboardAvoidingProps = {
  children: ReactElement;
  style?: Record<string, unknown>;
};

const KeyboardAvoiding: FC<KeyboardAvoidingProps> = ({
  children,
  style,
}): ReactElement => {
  return (
    <KeyboardAvoidingView
      style={[styles.wrapper, style]}
      behavior={isIOS ? 'padding' : undefined}
    >
      <ScrollView>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export { KeyboardAvoiding };
