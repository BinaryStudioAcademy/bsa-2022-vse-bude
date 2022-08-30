import React, { FC } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';

const BuildInfo: FC = () => {
  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifyContentCenter,
        globalStyles.py3,
      ]}
    >
      <Text style={[globalStyles.fs12, globalStyles.mr1]}>BuildNumber:</Text>
      <Text style={[globalStyles.fs12, globalStyles.mr5]}>
        {DeviceInfo.getBuildNumber()}
      </Text>
      <Text style={[globalStyles.fs12, globalStyles.mr1]}>Version:</Text>
      <Text style={globalStyles.fs12}>{DeviceInfo.getVersion()}</Text>
    </View>
  );
};

export { BuildInfo };
