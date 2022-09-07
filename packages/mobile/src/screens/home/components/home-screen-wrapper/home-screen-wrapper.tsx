import React, { FC } from 'react';
import { View } from '~/components/components';
import { globalStyles } from '~/styles/styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};
const HomeScreenWrapper: FC<Props> = ({ children }) => {
  return <View style={[globalStyles.px4, globalStyles.flex1]}>{children}</View>;
};

export { HomeScreenWrapper };
