import React, { FC } from 'react';
import { View } from '~/components/components';
import { styles } from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};
const Wrapper: FC<Props> = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export { Wrapper };
