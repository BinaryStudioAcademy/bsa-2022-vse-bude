import React, { FC, ReactElement } from 'react';
import { Text as NativeText, TextProps as RNTextProps } from 'react-native';
import { styles } from './styles';

type TextProps = RNTextProps & {
  children: string;
};

const Text: FC<TextProps> = ({
  style,
  children,
  ...restProps
}): ReactElement => {
  return (
    <NativeText
      style={[styles.default, style]}
      {...restProps}
    >
      {children}
    </NativeText>
  );
};

export { Text };
