import React, { FC, ReactNode } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <View style={globalStyles.px5}>{children}</View>;
};

export { Container };
