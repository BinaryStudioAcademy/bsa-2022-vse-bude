import React, { FC } from 'react';
import { FlexStyle } from 'react-native';
import { ClockIcon, View, Text } from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  duration: string;
  style?: FlexStyle;
};

const TimeWindow: FC<Props> = ({ duration, style = {} }) => {
  const { colors } = useCustomTheme();

  return (
    <View
      style={[
        styles.time,
        globalStyles.boxShadow,
        globalStyles.flexDirectionRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
        { backgroundColor: colors.whiteColor, borderColor: colors.line },
        style,
      ]}
    >
      <ClockIcon style={globalStyles.mr2} />
      <Text style={globalStyles.fs12}>{duration}</Text>
    </View>
  );
};

export { TimeWindow };
