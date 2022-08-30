import React, { FC } from 'react';
import { Text, ScreenWrapper, View } from '~/components/components';
import DeviceInfo from 'react-native-device-info';
import { globalStyles } from '~/styles/styles';

const Home: FC = () => {
  return (
    <ScreenWrapper style={[globalStyles.justifyContentSpaceBetween]}>
      <Text>Home screen</Text>

      <View style={[globalStyles.flexDirectionRow]}>
        <Text style={[globalStyles.fs12, globalStyles.mr1]}>BuildNumber:</Text>
        <Text style={[globalStyles.fs12, globalStyles.mr5]}>
          {DeviceInfo.getBuildNumber()}
        </Text>
        <Text style={[globalStyles.fs12, globalStyles.mr1]}>Version:</Text>
        <Text style={globalStyles.fs12}>{DeviceInfo.getVersion()}</Text>
      </View>
    </ScreenWrapper>
  );
};

export { Home };
