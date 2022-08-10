import React, { FC, ReactElement } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { PlatformOS } from '~/common/enums/enums';

type Props = {
  children: ReactElement;
  style: Record<string, unknown>;
};

const KeyboardAvoiding: FC<Props> = ({ children, style }): ReactElement => {
  return (
    <KeyboardAvoidingView
      style={style}
      behavior={PlatformOS.ANDROID ? 'padding' : 'position'}
      keyboardVerticalOffset={-100}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export { KeyboardAvoiding };
