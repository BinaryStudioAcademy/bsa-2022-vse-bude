import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from '../components';
import { styles } from './styles';

type Props = {
  children?: ReactNode;
};

const ScreenWrapper: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export { ScreenWrapper };
