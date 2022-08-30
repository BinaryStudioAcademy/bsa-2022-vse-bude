import React, { FC } from 'react';
import { Text, ScreenWrapper, BuildInfo } from '~/components/components';
import { globalStyles } from '~/styles/styles';

const Home: FC = () => {
  return (
    <ScreenWrapper style={globalStyles.justifyContentSpaceBetween}>
      <Text>Home screen</Text>
      <BuildInfo />
    </ScreenWrapper>
  );
};

export { Home };
