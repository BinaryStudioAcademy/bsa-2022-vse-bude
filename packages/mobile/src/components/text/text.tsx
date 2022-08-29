import React, { FC, ReactElement } from 'react';
import { Text as NativeText, TextProps as RNTextProps } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';
import { styles } from './styles';

type TextProps = RNTextProps & {
  children: string;
  color?: string;
};

const Text: FC<TextProps> = ({
  style,
  children,
  color,
  ...restProps
}): ReactElement => {
  const { colors } = useCustomTheme();

  return (
    <NativeText
      style={[styles.default, { color: color ?? colors.text }, style]}
      {...restProps}
    >
      {children}
    </NativeText>
  );
};

export { Text };
