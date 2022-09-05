import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};
const Wrapper: FC<Props> = ({ children }) => {
  return <View style={[styles.wrapper, globalStyles.px4]}>{children}</View>;
};

export { Wrapper };
