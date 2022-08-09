import React, { FC } from 'react';
import { Text as NativeText } from 'react-native';
import { Raleway, FontSize } from '~/common/enums/enums';

type Props = {
  fontVariant?: Raleway
  size?: FontSize
  // Add color variant, depends on theme
  children: string
};

const Text: FC<Props> = ({ fontVariant = Raleway.REGULAR, size = 16, children }) => {
  return <NativeText style={{ fontFamily: fontVariant, fontSize: size }}>{children}</NativeText>;
};

export { Text };
