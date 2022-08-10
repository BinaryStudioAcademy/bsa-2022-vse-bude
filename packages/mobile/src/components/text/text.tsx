import React, { FC, ReactElement } from 'react';
import { Text as NativeText, TextProps as RNTextProps } from 'react-native';
import { FontFamily, FontSize } from '~/common/enums/enums';

type TextProps = RNTextProps & {
  fontVariant?: FontFamily;
  size?: FontSize;
  children: string;
};

const Text: FC<TextProps> = ({
  fontVariant = FontFamily.RALEWAY_REGULAR,
  size = 16,
  style,
  children,
  ...restProps
}): ReactElement => {
  return (
    <NativeText
      style={[{ fontFamily: fontVariant, fontSize: size }, style]}
      {...restProps}
    >
      {children}
    </NativeText>
  );
};

export { Text };
