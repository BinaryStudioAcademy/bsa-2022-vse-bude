import React, { FC, ReactElement } from 'react';
import { Text as NativeText } from 'react-native';
import { Raleway, FontSize } from '~/common/enums/enums';

type Props = {
  fontVariant?: Raleway;
  size?: FontSize;
  children: string;
};

const Text: FC<Props> = ({
  fontVariant = Raleway.REGULAR,
  size = 16,
  children,
}): ReactElement => {
  return (
    <NativeText style={{ fontFamily: fontVariant, fontSize: size }}>
      {children}
    </NativeText>
  );
};

export { Text };
