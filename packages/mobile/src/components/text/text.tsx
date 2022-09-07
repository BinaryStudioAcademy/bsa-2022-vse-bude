import React, { FC, ReactElement } from 'react';
import { Text as NativeText, TextProps as RNTextProps } from 'react-native';
import { useCustomTheme } from '~/hooks/hooks';
import { styles } from './styles';

type TextProps = RNTextProps & {
  children: string | number;
};

const Text: FC<TextProps> = ({
  style,
  children,
  ...restProps
}): ReactElement => {
  const { colors } = useCustomTheme();

  return (
    <NativeText
      style={[styles.default, { color: colors.text }, style]}
      {...restProps}
    >
      {children}
    </NativeText>
  );
};

export { Text };
